import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";

const HeaderComponent = ({ imageUrl, imageDescription }) => {
  console.log("Rendering HeaderComponent:", imageDescription, imageUrl);

  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-96"
        resizeMode="cover"
      />

      <Text className="text-white text-2xl font-rbold m-3">
        {imageDescription}
      </Text>

      <View className="flex items-center m-3">
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
