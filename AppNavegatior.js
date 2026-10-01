import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import MainTab from "./MainTab";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#100014",
        },

        headerTintColor: "#FFFFFF",

        headerTitleStyle: {
          fontFamily: "PlayfairDisplay_700Bold",
          fontSize: 21,
        },

        headerShadowVisible: false,

        drawerStyle: {
          backgroundColor: "#100014",
          width: 290,
        },

        drawerActiveTintColor: "#FFFFFF",

        drawerInactiveTintColor: "#9D91A4",

        drawerActiveBackgroundColor: "#2A0A35",

        drawerLabelStyle: {
          fontFamily: "SpaceGrotesk_600SemiBold",
          fontSize: 15,
          marginLeft: -10,
        },

        drawerItemStyle: {
          borderRadius: 15,
          marginHorizontal: 10,
          marginVertical: 4,
        },

        overlayColor: "rgba(8,0,13,0.75)",
      }}
    >
      <Drawer.Screen
        name="Party Guide"
        component={MainTab}
        options={{
          title: "Party Guide",

          drawerIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "sparkles" : "sparkles-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}