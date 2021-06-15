import React, { useState } from "react";
import { styles, PurpleContainer } from "../../styles";
import { Text, TouchableOpacity, View } from "react-native";

export function Reader(props) {
  const params = props.route.params;

  return (
    <>
      <PurpleContainer>
        {params.header}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.roundButton}>
            <Text>{params.item}</Text>
          </TouchableOpacity>
        </View>
      </PurpleContainer>
    </>
  );
}
