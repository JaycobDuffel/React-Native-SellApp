import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync;

    if (!granted) {
      alert("You need to allow camera roll access to upload pictures.")
    }

  };

  useEffect(async () => {
    requestPermission()
  }, []);
  return <Screen></Screen>;
}

const styles = StyleSheet.create({});
