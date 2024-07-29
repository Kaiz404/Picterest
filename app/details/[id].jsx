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
import ImageCard from "../../components/ImageCard";
import { getImages, getPhoto } from "../../lib/unsplash";
import { SafeAreaView } from "react-native-safe-area-context";

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

  // const retrieveImage = async (imageID) => {
  //   const response = await getPhoto(imageID);
  //   return response;
  // };

  useEffect(() => {
    const fetchPhoto = async () => {
      const image = await getPhoto(params.id);
      setHeaderImage(image);
    };

    setIsLoading(true);
    try {
      fetchPhoto();
      console.log("SUCCESFULLY RETRIVED IMAGE: ", image);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading && photos.length === 0) {
    return (
      <SafeAreaView className="flex items-center">
        <Text className="text-2xl font-rblack text-gray-500">Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="bg-black h-full w-full">
      <View>
        <FlatList
          data={photos}
          renderItem={({ item }) => (
            <ImageCard imageUrl={item.url} imageID={item.id} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={() => addImages(6)}
          ListHeaderComponent={
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
