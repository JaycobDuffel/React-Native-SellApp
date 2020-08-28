import React, { useState } from "react";
import {FlatList} from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/hiking_pic.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/hiking_pic.jpeg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
          onPress={() => console.log("message selected", item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/hiking_pic.jpeg"),
            },
          ])
        }}
      />
    </Screen>
  );
}
