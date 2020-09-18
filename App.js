import React, { useState } from "react";
import OfflineNotice from "./app/components/OfflineNotice";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}
