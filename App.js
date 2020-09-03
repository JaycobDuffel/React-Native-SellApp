import React from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <AccountScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
