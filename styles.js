import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";

export const PurpleContainer = styled.View`
  flex: 1;
  background: #8b10ae;
`;

export const styles = StyleSheet.create({
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
