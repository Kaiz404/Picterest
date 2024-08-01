import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import ImageCard from "./ImageCard";
import HeaderComponent from "../app/details/HeaderComponent";

const ImageLayout = ({ photos, handleEndReached, headerComponent }) => {
  console.log("ImageLayout called");
  console.log("photos", photos);
  console.log("handleEndReached", handleEndReached);
  console.log("headerComponent", headerComponent);

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <ImageCard imageUrl={item.url} imageID={item.id} />
        )}
        keyExtractor={(item, index) => index}
        numColumns={2}
        onEndReached={handleEndReached}
        ListHeaderComponent={headerComponent}
      />
    </View>
  );
};

export default ImageLayout;
