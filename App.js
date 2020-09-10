import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Button, Image } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageURI, setImageURI] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to allow camera roll access to upload pictures.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ImageInput
        imageURI={imageURI}
        onChangeImage={(uri) => setImageURI(uri)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
