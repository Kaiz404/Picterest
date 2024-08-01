import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import HeaderComponent from "./HeaderComponent";
import { getImages, getPhoto } from "../../lib/unsplash";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageLayout from "../../components/ImageLayout";

const ImageDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [headerImage, setHeaderImage] = useState({});
  const params = useLocalSearchParams();
  const router = useRouter();

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
    const fetchPhoto = async () => {
      const image = await getPhoto(params.id);
      setHeaderImage(image);
    };

    setIsLoading(true);
    try {
      fetchPhoto();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    addImages("10");
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
      <View>
        <ImageLayout
          photos={photos}
          handleEndReached={() => addImages(10)}
          headerComponent={
            <HeaderComponent
              imageUrl={headerImage.url}
              imageDescription={headerImage.description}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageDetails;
