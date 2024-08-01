import React, { useState, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import icons from "../assets/icons/icons";
import { searchImages } from "../lib/unsplash";

const SearchComponent = ({ initialQuery }) => {
  [query, setQuery] = useState("");
  [photos, setPhotos] = useState([]);

  const onSearch = async () => {
    // TODO: Implement search functionality
    const results = await searchImages(query);
    setPhotos(results);
  };

  return (
    <View className="bg-[#1A1A1A] rounded-full m-5 h-11 flex justify-center">
      <View className="flex-row justify-center items-center">
        <TouchableOpacity
          className="flex justify-center"
          onPress={() => {
            if (query) {
              onSearch();
            } else {
              return Alert.alert(
                "Missing query",
                "Please enter a search query"
              );
            }
          }}
        >
          <Image
            className="w-7 h-7 absolute left-4"
            value={query}
            source={icons.searchhollow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TextInput
          className="text-[#767676] font-rregular text-2xl absolute left-14"
          value={query}
          placeholder="Search for pictures"
          placeholderTextColor="#767676dd"
          onChangeText={(text) => {
            setQuery(text);
          }}
        />
      </View>
    </View>
  );
};

export default SearchComponent;
