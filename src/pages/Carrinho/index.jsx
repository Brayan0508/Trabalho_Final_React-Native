import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Button } from "react-native";
import { useCarrinho } from "../../context/carrinho";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const iconAdd = <Ionicons name="add-circle" size={24} color="#ea651d" />;
const iconRemove = <Ionicons name="remove-circle" size={24} color="#ea651d" />;
export default function Carrinho({ navigation, navigation: { goBack } }) {
  const { remove, add, carrinho, valorTotal } = useCarrinho();
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <View style={{ width: "100%", height: "7%", backgroundColor: "#583479" }}>
        <Text style={styles.iconsMenuEsquerda} onPress={() => goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Text>

        <Text style={styles.iconsMenuDireita}>
          <Ionicons
            name="cart-outline"
            size={24}
            color="white"
            onPress={() => {
              navigation.navigate("Carrinho");
            }}
          />
          {"  "}
          <Ionicons
            name="exit-outline"
            size={24}
            color="white"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </Text>
      </View>
      <FlatList
        data={carrinho}
        contentContainerStyle={styles.flatList}
        renderItem={({ index, item }) => {
          return (
            <View style={styles.cardCarrinho}>
              <Text style={styles.textProduto}>{item.nome}</Text>
              <Text style={styles.textValorUnitario}>R$: {item.valor}</Text>

              <View style={styles.boxQuantidadeProduto}>
                <TouchableOpacity
                  onPress={() => setQuantidade((quantidade) => quantidade - 1)
                  
                  }
                >
                  <Text>{iconRemove}</Text>
                </TouchableOpacity>
                <Text style={styles.quantidadeProduto}>{quantidade}</Text>

                <TouchableOpacity
                  onPress={() => setQuantidade((quantidade) => quantidade + 1)}
                >
                  <Text>{iconAdd}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boxButtonExcluir}>
                <TouchableOpacity
                  onPress={() => remove(index)}
                  style={styles.buttonExcluir}
                >
                  <Text style={styles.textButtonExcluir}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyEstractor={(item) => item.id}
      ></FlatList>
      <View
        style={{
          backgroundColor: "#FFF",
          width: "100%",
          height: "10%",
          justifyContent: "center",
          paddingStart: 30,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Total R$ {valorTotal}</Text>
      </View>
    </>
  );
}
