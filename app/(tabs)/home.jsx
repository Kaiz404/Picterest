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
        <ScrollView>
          <View className="flex-row w-full justify-around">
            <View className="w-1/2 h-auto flex-col">
              <ImageCard imageUrl={photos[0].url} imageHeight={200} />
              <ImageCard imageUrl={photos[1].url} imageHeight={200} />
              <ImageCard imageUrl={photos[2].url} imageHeight={200} />
            </View>
            <View className="w-1/2">
              <ImageCard imageUrl={photos[3].url} imageHeight={200} />
              <ImageCard imageUrl={photos[4].url} imageHeight={200} />
              <ImageCard imageUrl={photos[5].url} imageHeight={200} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
