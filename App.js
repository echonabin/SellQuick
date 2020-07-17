import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";

export default function App({ title, onPress }) {
  return (
    <View>
      <ListingDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
