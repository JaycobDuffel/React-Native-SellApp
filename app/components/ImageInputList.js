import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageURIs = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageURIs.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput imageURI={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
