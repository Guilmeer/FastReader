import React from "react";
import { styles } from "./styles";
import { Text, View, Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Header({ items }) {
  return (
    <View style={styles.headerContainer}>
      <Text
        style={[styles.headerTitleText, { top: screenHeight * 0.02, flex: 4 }]}
      >
        {"Fast Reader"}
      </Text>
      {items}
    </View>
  );
}
