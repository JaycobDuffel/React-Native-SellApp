import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colours from "../config/colours";
import AppText from "./AppText";

export default function Card({
  title,
  subTitle,
  imageURL,
  onPress,
  thumbnailURL,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={thumbnailURL}
          uri={imageURL}
        />
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colours.dollarGreen,
    fontWeight: "bold",
  },
});
