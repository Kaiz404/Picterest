import { StatusBar } from "expo-status-bar";
import React from "react";
import { Redirect, router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PortalButton from "../components/PortalButton";

export default function App() {
  <Redirect href="/home" />;
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <Text className="text-xl font-rbold color-white">Welcome!</Text>
      <PortalButton
        handlePress={() => {
          router.push("./home");
        }}
      />
      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
}
