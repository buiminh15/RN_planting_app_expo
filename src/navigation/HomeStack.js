import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PlantingDetail } from "../components";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={HomeScreen}
    />
    <HomeStack.Screen
      options={{ headerShown: false }}
      name={"PlantingDetail"}
      component={PlantingDetail}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;

const styles = StyleSheet.create({});
