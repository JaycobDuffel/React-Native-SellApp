import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/Navigation/AuthNavigator"
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";

const Link = () => {
  <Button />;
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  );
};

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="Acoount" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}
