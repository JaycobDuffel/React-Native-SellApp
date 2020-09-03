import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colours from "../config/colours";

const listings = [
  {
    id:1,
    title: 'Red Jacket for Sale',
    price: 100,
    image: require("../assets/jacket.jpg")
  },
  {
    id:2,
    title: 'couch for sale',
    price: 1000,
    image: require("../assets/couch.jpg")
  },
]

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList data={listings} keyExtractor={listing => listing.id.toString()} renderItem={({ item }) => 
        <Card 
        title={item.title}
        subTitle={"$" + item.price}
        image={item.image}
        /> 
      }/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 15,
    backgroundColor: colours.light
  }
});
