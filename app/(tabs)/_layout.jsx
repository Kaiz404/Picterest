import { Image, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import icons from "../../assets/icons/icons";
import * as Svg from "react-native-svg";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          paddingLeft: "20%",
          paddingRight: "20%",
          height: "5%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "All",
          tabBarIcon: () => <TabIcon icon={icons.home} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Search",
          tabBarIcon: () => <TabIcon icon={icons.search} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Notifications",
          tabBarIcon: () => <TabIcon icon={icons.notifications} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "User",
          tabBarIcon: () => <TabIcon icon={icons.user} />,
        }}
      />
    </Tabs>
  );
};

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" className="w-8 h-8" />
    </View>
  );
};

export default TabLayout;
