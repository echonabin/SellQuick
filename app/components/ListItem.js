import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/colors";
import Screen from "./Screen";

const ListItem = ({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle} </AppText>}
          </View>
        </View>
      </Swipeable>
    </TouchableHighlight>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
