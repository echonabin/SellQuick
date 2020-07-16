import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Background.jpg")}>
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});

export default WelcomeScreen;
