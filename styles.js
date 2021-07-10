import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const PurpleContainer = styled.View`
  flex: 1;
  background: #8b10ae;
`;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  roundAddButton: {
    width: screenWidth * 0.05,
    height: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    borderRadius: 100,
  },
  roundPlayButton: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "center",
    top: screenHeight * 0.8,
  },
  appButtonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
