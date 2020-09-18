import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colours from "../config/colours";
import listingsApi from "../api/listings";
import Routes from "../Navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

export default function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

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
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
            thumbnailURL={item.images[0].thumbnailUrl}
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
    justifyContent: "center",
  },
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100%",
  },
  screen: {
    padding: Platform.OS === "android" ? 10 : 15,
    backgroundColor: colours.light,
  },
});
