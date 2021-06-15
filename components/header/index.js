import React from "react";
import { Container, styles } from "./styles";
import { Text } from "react-native";

export default function Header() {
  return (
    <Container>
      <Text style={styles.titleText}>{"Fast Reader"}</Text>
    </Container>
  );
}
