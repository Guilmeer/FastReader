import React, { useState } from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import MainPageTextOptions from "../tabs";
import { styles, PurpleContainer } from "../../styles";

export function HomeScreen(props) {
  const textList = [
    { name: "jãdsa", key: "1" },
    { name: "mar", key: "2" },
    { name: "sam", key: "3" },
    { name: "gui", key: "4" },
    { name: "jão", key: "5" },
    { name: "mar", key: "6" },
    { name: "sam", key: "7" },
    { name: "gui", key: "8" },
    { name: "jão", key: "9" },
    { name: "mar", key: "10" },
    { name: "sam", key: "11" },
    { name: "gui", key: "12" },
  ];

  return (
    <>
      <PurpleContainer>
        {props.header}
        <FlatList
          data={textList}
          renderItem={({ item, index }) => (
            <MainPageTextOptions>
              <View styles={styles.Container}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Reader", {
                      item: "Action Button",
                    });
                  }}
                >
                  <Text style={styles.appButtonText}>
                    {item.name + " " + item.key}
                  </Text>
                </TouchableOpacity>
              </View>
            </MainPageTextOptions>
          )}
        />
      </PurpleContainer>
    </>
  );
}
