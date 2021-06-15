import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles, PurpleContainer, Container, headerColor } from "./styles";
import Header from "./components/header/index";
import { HomeScreen } from "./components/screens/Home";
import { Reader } from "./components/screens/Reader";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  var headerOn = true;
  header = null;
  if (headerOn) {
    header = <Header />;
  }

  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar />
      <PurpleContainer>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={header} />}
            </Stack.Screen>
            <Stack.Screen name="Reader" component={Reader} />
          </Stack.Navigator>
        </NavigationContainer>
      </PurpleContainer>
    </>
  );
}
