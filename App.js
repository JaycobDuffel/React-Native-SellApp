import React from "react";
import { StyleSheet, StatusBar, Platform} from "react-native";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <ListingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
