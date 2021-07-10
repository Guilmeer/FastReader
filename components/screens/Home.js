import React, { useState } from "react";
import {
  TouchableOpacity,
  Modal,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import MainPageTextOptions from "../tabs";
import { styles, PurpleContainer } from "../../styles";
import Header from "../header/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const storage_key = "ObjTexts";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textList: this.readData(),
      visibleModal: false,
    };
  }

  params = this.props.route.params;

  saveData = async (obj) => {
    try {
      await AsyncStorage.setItem(storage_key, obj);
    } catch (e) {
      alert(e);
    }
  };

  readData = async () => {
    try {
      const obj = await AsyncStorage.getItem(storage_key);
      if (obj !== null) {
        this.setState({ textList: JSON.parse(obj) });
      }
    } catch (e) {
      this.setState({ textList: null });
      // alert("Failed to fetch the data from storage");
    }
  };

  objectTextList = [
    { name: "jãdsa", key: "1" },
    { name: "mar", key: "2" },
  ];
  objectToSave = JSON.stringify(this.objectTextList);
  saveDataInfo = this.saveData(this.objectToSave);

  render() {
    return (
      <>
        <View>
          <Header
            items={
              <TouchableOpacity
                style={[
                  styles.roundAddButton,
                  {
                    flex: 1,
                    right: screenWidth * 0.05,
                    top: screenHeight * 0.02,
                  },
                ]}
                onPress={() => {
                  this.setState({ visibleModal: true });
                }}
              >
                <Ionicons name="add" size={32} color="#8b10ae" />
              </TouchableOpacity>
            }
          />
        </View>
        <PurpleContainer>
          <FlatList
            data={this.state.textList}
            renderItem={({ item, index }) => (
              <MainPageTextOptions>
                <View style={styles.Container}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Reader", {
                        params: this.params,
                        item: item.name,
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
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.visibleModal}
          >
            <View style={styles.centeredView}>
              <BlurView
                intensity={250}
                style={{
                  height: screenHeight,
                  width: screenWidth,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={[
                    styles.modalView,
                    { height: screenHeight * 0.6, width: screenWidth * 0.8 },
                  ]}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ padding: 10 }}
                      title="fechar"
                      onPress={() => {
                        this.setState({ visibleModal: false });
                      }}
                    >
                      <Ionicons name="trash-bin" size={32} color="#8b10ae" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ padding: 10 }}
                      title="fechar"
                      onPress={() => {
                        this.setState({ visibleModal: false });
                      }}
                    >
                      <Ionicons name="checkbox" size={32} color="#8b10ae" />
                    </TouchableOpacity>
                  </View>
                </View>
              </BlurView>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}
