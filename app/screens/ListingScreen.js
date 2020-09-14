import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import colours from "../config/colours";
import listingsApi from "../api/listings"
import Routes from "../Navigation/routes";
import Screen from "../components/Screen";



export default function ListingScreen({ navigation }) {

  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const { data } = await listingsApi.getListings()
    setListings(data)
  }

  useEffect(() => {
    loadListings();
  }, [])


  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 15,
    backgroundColor: colours.light,
  },
});
