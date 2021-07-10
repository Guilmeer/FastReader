import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
    height: screenHeight * 0.13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  headerTitleText: {
    fontSize: 25,
    padding: 15,
    fontWeight: "bold",
    color: "white",
  },
});
