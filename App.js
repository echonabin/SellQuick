import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App({ title, onPress }) {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({});
