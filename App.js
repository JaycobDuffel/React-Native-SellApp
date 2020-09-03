import React from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <ListItem title="My Title" ImageComponent={<Icon name="email" />}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
