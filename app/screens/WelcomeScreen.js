import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/Background.jpg")}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.Welcomelogo}
          source={require("../assets/buy.png")}
        />
        <Text style={styles.tagline}>Sell what we don't need !</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title='Login'
          onPress={() => console.log("Tapped Login!!")}
        />
        <AppButton
          title='Register'
          color='secondary'
          onPress={() => console.log("Tapped Register!!")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Welcomelogo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
