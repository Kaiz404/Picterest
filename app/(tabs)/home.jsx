import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../assets/images/images";
import ImageCard from "../../components/ImageCard";
import { getImages } from "../../lib/unsplash";
import { Link } from "expo-router";
import ImageLayout from "../../components/ImageLayout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const addImages = async (amount) => {
    setIsLoading(true);
    try {
      const newImages = await getImages(amount);
      setPhotos((prevPhotos) => [...prevPhotos, ...newImages]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    addImages(10);
  }, []);

  if (isLoading && photos.length === 0) {
    return (
      <SafeAreaView className="flex items-center">
        <Text className="text-2xl font-rblack text-gray-500">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-[#121212] h-full w-full">
      <View className="items-center flex-1 max-h-16 mt-2">
        <Text className="text-2xl font-rblack text-white ">All</Text>
        <Image
          className="w-8 h-2"
          source={images.underline}
          resizeMode="contain"
        />
      </View>

      <View className="h-[92%] pl-1 pr-1">
        <ImageLayout photos={photos} handleEndReached={() => addImages(10)} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
