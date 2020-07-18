import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/mac.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Mac for sell</AppText>
        <AppText style={styles.price}>$400</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/nabin.jpg")}
            title='Nabin'
            subTitle='5 Listing'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
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
