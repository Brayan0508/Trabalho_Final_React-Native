import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  navTopo: {
    width: "100%",
    height: "10%",
    backgroundColor: "#583479"
  },

  iconsMenuEsquerda: {
    position: "absolute",
    left: "5%",
    top: "20%"
  },
  iconsMenuDireita: {
    position: "absolute",
    right: "5%",
    top: "20%",
    color: "white",
    fontSize: 20
  },
  card: {
    width: "90%",
    height: "100%",
    borderRadius: 4,
    alignSelf: "center",
    padding: 20,

  },
  cardImage: {
    width: 200, height: 200, marginBottom: 10
  },
  cardTextProduto: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20
  },
  cardTextValor: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "200"
  },
  cardTextDescricao: {
    fontSize: 18
  },
  buttonAdicionarAoCarrinho: {
    marginTop: 20,
    height: 50,
    title: "Entrar",
    width: "100%",
    backgroundColor: "#ea651d",
    borderRadius: 25,
    justifyContent: "center",
  },
  textButtonAdicionarAoCarrinho: {
    color: "#FFF",
    alignSelf: "center",
    fontSize: 22
  }




});