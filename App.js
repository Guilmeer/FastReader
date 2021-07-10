import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { styles, PurpleContainer, Container, headerColor } from "./styles";
import { HomeScreen } from "./components/screens/Home";
import { Reader } from "./components/screens/Reader";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class App extends React.Component {
  Stack = createStackNavigator();

  state = {};

  render() {
    return (
      <>
        <StatusBar />
        <PurpleContainer>
          <NavigationContainer>
            <this.Stack.Navigator>
              <this.Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false, title: "Fast Reader" }}
              />
              <this.Stack.Screen name="Reader" component={Reader} />
            </this.Stack.Navigator>
          </NavigationContainer>
        </PurpleContainer>
      </>
    );
  }
}
