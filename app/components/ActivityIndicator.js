import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import Screen from "./Screen";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
      <View style={styles.container}>
        <LottieView
        style={styles.lottie}
          autoPlay
          loop
          source={require("../assets/animations/loader.json")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  lottie: {
    width: "50%",
  },
});
