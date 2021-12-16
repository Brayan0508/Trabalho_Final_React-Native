import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    width: "100%",
    padding: 10,
    backgroundColor: "#e3e3e3"
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

  cardCarrinho: {
    width: "100%",
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  buttonExcluir: {
    height: 40,
    title: "Excluir",
    width: "40%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#ea651d",
    borderRadius: 25,
    justifyContent: "center"
  },
  textProduto: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5
  },
  textValorUnitario: {
    fontSize: 16
  },
  boxQuantidadeProduto: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  quantidadeProduto: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  boxButtonExcluir: {
    justifyContent: "center",
    flexDirection: "row"
  },
  textButtonExcluir: {
    color: "#FFF",
    alignSelf: "center",
    fontSize: 22
  }

});