import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const jsonValue = await AsyncStorage.getItem("person");
      const person = JSON.parse(jsonValue);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return null;
}
