import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/mac.jpg")} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Mac for sale</Text>
        <Text style={styles.price}>$400</Text>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
