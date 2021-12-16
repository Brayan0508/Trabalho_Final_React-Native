import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Api from "../../Services/Api";
import { Card } from "react-native-elements";
import { useCarrinho } from "../../context/carrinho";

export default function Detalhe({ route, navigation, navigation: { goBack } }) {
  const { id } = route.params;
  const [produto, setProduto] = useState([]);
  const { add } = useCarrinho();

  useEffect(async () => {
    await Api.get(`/produto/${id}`).then((response) => {
      setProduto(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <View>
      <View style={styles.navTopo}>
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
          />{" "}
          <Ionicons
            name="exit-outline"
            size={24}
            color="white"
            onPress={()=> navigation.dispatch(StackActions.popToTop())}
          />
        </Text>
      </View>
      <Card containerStyle={styles.card}>
        <View key={produto.id}>
          <Card.Image
            style={styles.cardImage}
            source={{ uri: produto.fotoLink }}
          ></Card.Image>

          <View>
            <Text style={styles.cardTextProduto}>{produto.nome}</Text>
            <Text style={styles.cardTextValor}>R$ {produto.valor}</Text>
            <Text style={styles.cardTextDescricao}>{produto.descricao}</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => add(produto)}
              style={styles.buttonAdicionarAoCarrinho}
            >
              <Text style={styles.textButtonAdicionarAoCarrinho}>
                Adicionar ao carrinho
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
  
}
// const { carrinho } = useCarrinho();
//   function IconWithBadge() {
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Text>{Object.key(carrinho).length} </Text>
//       </View>
//     );
//   }