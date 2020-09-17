import React from "react";
import OfflineNotice from "./app/components/OfflineNotice";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/Navigation/AppNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
