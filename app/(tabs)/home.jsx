import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../assets/images/images";
import ImageCard from "../../components/ImageCard";
import { getUnsplash } from "../../lib/unsplash";

const Home = () => {
  const [photos, isLoading] = getUnsplash("10");
  console.log("Photos: ", photos);
  console.log("Loading: ", isLoading);

  if (isLoading) {
    return (
      <SafeAreaView className="flex items-center">
        <Text className="text-2xl font-rblack text-gray-500">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-black h-full w-full">
      <View className="items-center flex-1 max-h-16">
        <Text className="text-2xl font-rblack text-white ">All</Text>
        <Image
          className="w-11 h-5"
          source={images.underline}
          resizeMode="contain"
        />
      </View>

      <View className="h-[92%]">
        <FlatList
          data={photos}
          renderItem={({ item }) => <ImageCard imageUrl={item.url} />}
          keyExtractor={(item) => item.url}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
