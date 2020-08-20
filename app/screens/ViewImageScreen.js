import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ViewImageScreen() {
  return (
    <View styles={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
