import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";

import AppText from "../components/AppText/AppText";
import colours from "../config/colours";

export default function ListItem({ title, subTitle, image, onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colours.light}>
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colours.subTitleGrey,
  },
});
