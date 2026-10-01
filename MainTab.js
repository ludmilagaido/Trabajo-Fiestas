import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  FiestasStack,
  MusicaStack,
  OutfitsStack,
  IdeasStack,
  FotosStack,
} from "./Stack/Stack";

const Tab = createBottomTabNavigator();

function AnimatedTabIcon({ name, focused, color }) {
  const scale = useRef(
    new Animated.Value(focused ? 1 : 0.85)
  ).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1 : 0.85,
      useNativeDriver: true,
      friction: 7,
      tension: 90,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={[
        styles.iconContainer,
        focused && styles.activeIconContainer,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Ionicons
        name={name}
        size={focused ? 23 : 21}
        color={color}
      />

      {focused && <View style={styles.activeDot} />}
    </Animated.View>
  );
}

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        animation: "shift",

        tabBarActiveTintColor: "#FF3D81",
        tabBarInactiveTintColor: "#8F8295",

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle: styles.label,

        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Fiestas") {
            iconName = focused
              ? "sparkles"
              : "sparkles-outline";
          } else if (route.name === "Musica") {
            iconName = focused
              ? "musical-notes"
              : "musical-notes-outline";
          } else if (route.name === "Outfits") {
            iconName = focused
              ? "shirt"
              : "shirt-outline";
          } else if (route.name === "Ideas") {
            iconName = focused
              ? "bulb"
              : "bulb-outline";
          } else {
            iconName = focused
              ? "camera"
              : "camera-outline";
          }

          return (
            <AnimatedTabIcon
              name={iconName}
              focused={focused}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Fiestas"
        component={FiestasStack}
        options={{
          tabBarLabel: "Fiestas",
        }}
      />

      <Tab.Screen
        name="Musica"
        component={MusicaStack}
        options={{
          tabBarLabel: "Música",
        }}
      />

      <Tab.Screen
        name="Outfits"
        component={OutfitsStack}
        options={{
          tabBarLabel: "Outfits",
        }}
      />

      <Tab.Screen
        name="Ideas"
        component={IdeasStack}
        options={{
          tabBarLabel: "Ideas",
        }}
      />

      <Tab.Screen
        name="Fotos"
        component={FotosStack}
        options={{
          tabBarLabel: "Fotos",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 78,
    paddingTop: 7,
    paddingBottom: 9,

    backgroundColor: "#100014",

    borderTopWidth: 1,
    borderTopColor: "#32133D",

    elevation: 20,

    shadowColor: "#FF2D75",
    shadowOpacity: 0.12,
    shadowRadius: 15,

    shadowOffset: {
      width: 0,
      height: -5,
    },
  },

  label: {
    fontFamily: "SpaceGrotesk_600SemiBold",
    fontSize: 10,
    marginTop: 2,
  },

  iconContainer: {
    width: 44,
    height: 34,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 16,
  },

  activeIconContainer: {
    backgroundColor: "#2A0A35",
  },

  activeDot: {
    position: "absolute",

    bottom: 1,

    width: 4,
    height: 4,

    borderRadius: 4,

    backgroundColor: "#FF3D81",
  },
});