import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colours from "../config/colours";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  title: {
    color: colours.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
