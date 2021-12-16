import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardLoginSocial: {
    alignItems: "center"
  },

  buttonLoginSocial: {
    flexDirection: "row",
    backgroundColor: "#485a96",
    width: "70%",
    height: 50,
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 25,
  },
  iconButtonLoginSocial: {
    position: "absolute",
    top: 12,
    left: 20
  },
  textButtonLoginSocial: {
    color: "#fff",
    alignSelf: "center"
  },
  boxLogin: {
    heigth: 400,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginTop: "33%",
  },
  labelLogin: {
    alignSelf: "flex-start",
    marginLeft: "15%",
    marginTop: "5%",
  },
  inputText: {

    borderRadius: 5,
    marginTop: 1,
    height: 50,
    width: "70%",
    paddingLeft: 20,
    backgroundColor: "#e3e3e3",
  },
  buttonEntrar: {
    height: 50,
    title: "Entrar",
    width: "70%",
    backgroundColor: "#ea651d",
    borderRadius: 25,
    justifyContent: "center",
  },
  boxBurronEntrar: {
    marginTop: "5%",
    height: "50%",
    width: "100%",
    alignItems: "center",
  },
  textButtonEntrar: {
    color: "#FFF",
    alignSelf: "center",
    fontSize: 22
  }
});