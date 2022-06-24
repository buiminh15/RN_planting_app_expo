import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../../constants";
import { tabs } from "../../constants/config";

const Tab = createBottomTabNavigator();

function Icon({ tab, focused }) {
  if (tab.name === "Camera") {
    return (
      <TouchableOpacity
        onPress={() => console.log('camera')}
        style={{
          width: wp(14),
          height: wp(14),
          backgroundColor: COLORS.primary,
          borderRadius: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={tab.icon}
          resizeMode="contain"
          style={{
            tintColor: COLORS.white,
            width: wp(6),
            height: hp(6),
          }}
        />
      </TouchableOpacity>
    );
  }
  return (
    <Image
      source={tab.icon}
      resizeMode="contain"
      style={{
        tintColor: focused ? COLORS.primary : COLORS.gray,
        width: wp(6),
        height: hp(6),
      }}
    />
  );
}

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
            tabBarIcon: ({ focused }) => <Icon tab={tab} focused={focused} />,
          }}
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
