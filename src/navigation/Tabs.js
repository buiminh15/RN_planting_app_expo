import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/HomeScreen";
import { COLORS, tabs } from "../../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();

// function Test({ routeName }) {
//   const tabInfo = tabs.filter((tab) => tab.name === routeName);
//   return (
//     <Image
//       source={tabInfo.icon}
//       resizeMode="contain"
//       style={{
//         width: wp(6),
//         height: hp(6),
//       }}
//     />
//   );
// }

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { height: "10%" },
      })}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={tab.icon}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.primary : COLORS.gray,
                  width: wp(6),
                  height: hp(6),
                }}
              />
            ),
          }}
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}

      
      {/* 
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorite" component={Home} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
