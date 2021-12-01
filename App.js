import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import fonts from "./assets/fonts";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = Font.useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"MainLayout"}
        >
          <Stack.Screen name="MainLayout" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
