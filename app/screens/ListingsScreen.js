import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator"
import Card from "../components/Card";
import colours from "../config/colours";
import listingsApi from "../api/listings";
import Routes from "../Navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export default function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View style={styles.errorMessage}>
          <AppText>Could not retrieve listings from server.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </View>
      )}
    <ActivityIndicator visible={loading}/>
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
  animation: {
    alignItems: "center",
    backgroundColor: "orange",
    justifyContent: "center"
  },
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100%"
  },
  screen: {
    padding: Platform.OS === "android" ? 10 : 15,
    backgroundColor: colours.light,
  },
});
