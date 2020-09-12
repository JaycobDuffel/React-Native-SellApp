import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";
import AuthNavigator from "./app/Navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
