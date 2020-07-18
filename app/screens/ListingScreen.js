import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listing = [
  {
    id: 1,
    title: "Mac for sale",
    price: 400,
    image: require("../assets/mac.jpg"),
  },
  {
    id: 2,
    title: "Iphone for sale",
    price: 400,
    image: require("../assets/iphone.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
