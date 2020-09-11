import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import colours from "../config/colours";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
      <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
      <AppButton title='Register' colour="secondary"onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10
  },
});
