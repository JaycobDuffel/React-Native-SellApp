import React, { useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageURIs = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageURIs.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageURI={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
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
