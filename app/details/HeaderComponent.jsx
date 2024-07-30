import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const HeaderComponent = ({ imageUrl, imageDescription }) => {
  console.log("Rendering HeaderComponent:", imageDescription, imageUrl);

  return (
    <View>
      <View className="flex w-full h-96">
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.5)", "transparent"]}
          className="h-20 w-full z-10"
          locations={[0, 1]}
        />
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-96 absolute"
          resizeMode="cover"
        />
      </View>

      <View className="flex items-center">
        <Text className="text-white text-xl font-rbold mt-3">Pinterest</Text>
      </View>

      <Text className="text-white text-lg font-rmedium mb-3 text-center">
        {imageDescription}
      </Text>

      <View className="flex items-center mb-3">
        <TouchableOpacity className="bg-red-600 h-14 w-32 content-center rounded-full flex items-center justify-center">
          <Text className="text-white font-rmedium text-xl">Save</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-gray-600 h-[1px]"></View>
      <Text className="text-white text-lg font-rbold"> More to explore </Text>
    </View>
  );
};

export default HeaderComponent;
