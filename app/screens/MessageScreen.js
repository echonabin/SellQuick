import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/nabin.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/nabin.jpg"),
  },
];
const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handelDelete = (message) => {
    //Delete the message from messages!!
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handelDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/nabin.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
