import React from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <MessagesScreen  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
