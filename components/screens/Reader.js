import React, { useState } from "react";
import { styles, PurpleContainer } from "../../styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export class Reader extends React.Component {
  constructor(props) {
    super(props);
  }
  params = this.props.route.params;

  state = {
    onPlay: false,
  };

  toPlay = () => {
    this.setState({ onPlay: !this.state.onPlay });
    console.log(this.state.onPlay);
  };

  render() {
    return (
      <>
        <PurpleContainer>
          {this.params.header}
          <View>
            <TextInput />
            <Text>{this.state.onPlay ? this.params.item : "not"}</Text>
            <TouchableOpacity
              style={[
                styles.roundPlayButton,
                !this.state.onPlay ? { opacity: 1 } : { opacity: 0.3 },
              ]}
              onPress={() => {
                this.toPlay();
              }}
            >
              <Text style={[styles.appButtonText]}>
                {!this.state.onPlay ? "Play" : "Pause"}
              </Text>
            </TouchableOpacity>
          </View>
        </PurpleContainer>
      </>
    );
  }
}
