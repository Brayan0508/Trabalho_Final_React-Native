import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const iconFacebook = <FontAwesome name="facebook" size={24} color="#fff" />;
const iconGoogle = <AntDesign name="google" size={24} color="#fff" />;

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const handleLogin = () => {
    if (email == "eu" && senha == "123") {
      navigation.navigate("Home");
    } else alert("Usuario ou senha incorretos!!!!");
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.cardLoginSocial}>
          <TouchableOpacity style={styles. buttonLoginSocial} activeOpacity={0.5}>
            <Text style={styles.iconButtonLoginSocial}>{iconFacebook}</Text>
            <Text style={styles.textButtonLoginSocial}>Login com o Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles. buttonLoginSocial} activeOpacity={0.5}>
            <Text style={styles.iconButtonLoginSocial}>
              {iconGoogle}
            </Text>
            <Text style={styles.textButtonLoginSocial}>
              Login com o Google
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View
        style={styles.boxLogin}
      >
        <Text style={styles.labelLogin}>
          E-mail
        </Text>
        <TextInput
          key="email"
          style={styles.inputText}
          onChangeText={(value) => {
            setEmail(value);
          }}
          underlineColorAndroid="#e3e3e3"
          autoCapitalize="none"
        />
        <Text
          style={styles.labelLogin}
        >
          Senha
        </Text>
        <TextInput
          key="senha"
          style={styles.inputText}
          onChangeText={(value) => {
            setSenha(value);
          }}
          underlineColorAndroid="#e3e3e3"
          autoCapitalize="none"
        />
      </View>
      <View
        style={styles.boxBurronEntrar}
      >
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.buttonEntrar}
        >
          <Text style={styles.textButtonEntrar}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
