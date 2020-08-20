import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Button,
  StatusBar,
  Platform,
  View,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        backgroundColor: "orange",
        flex: 1,
      }}
      
    >
      <View style={{
        backgroundColor: "blue",
        flex: 2,
      }} />
      <View style={{
        backgroundColor: "orange",
        flex: 1,
      }} />
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
