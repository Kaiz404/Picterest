import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import icons from "../../assets/icons/icons";
import SearchComponent from "../../components/SearchComponent";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView className="bg-[#121212] h-full">
      <SearchComponent />

      <View className="w-full mt-44 flex justify-center items-center">
        <Image
          source={icons.imagesearch}
          className="w-60 h-60 ml-6"
          resizeMode="contain"
        />
        <Text className="text-[#b2b2b2] font-rregular text-2xl">
          Search for an image!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
