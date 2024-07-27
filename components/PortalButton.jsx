import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PortalButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="bg-secondary rounded-xl min-h-[62px] w-[70%] justify-center items-center"
    >
      <Text className="text-primary font-rbold text-lg">Go To Picterest</Text>
    </TouchableOpacity>
  );
};

export default PortalButton;
