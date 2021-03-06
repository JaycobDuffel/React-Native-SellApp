import React from "react";
import { StyleSheet, View } from "react-native";
import {Image} from "react-native-expo-image-cache"

import ListIem from "../components/ListItem";
import AppText from "../components/AppText";
import colours from "../config/colours";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} uri={listing.images[0].url} preview={listing.images[0].thumbnailUrl} tint="light" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListIem
            image={require("../assets/hiking_pic.jpeg")}
            title="Jaycob"
            subTitle="Victoria"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colours.dollarGreen,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 35,
  },
});
