import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import icons from "../assets/icons/icons";
import images from "../assets/images/images";

const ImageCard = ({ imageUrl, imageHeight }) => {
  console.log(imageUrl);
  const heights = [100, 200, 300];
  var index = Math.floor(Math.random() * heights.length);
  console.log("height: ", heights[index]);
  return (
    <View
      className={`flex-1 flex-col items-center w-11/12 h-60 bg-red-300 mt-3 mb-3 ml-2 mr-2 rounded-2xl`}
      //className={`flex-1 flex-col items-center w-11/12 h-[${heights[index]}px] bg-red-300 m-3 rounded-2xl`}
    >
      {/* <Text className="text-white">Image Card</Text> */}
      <Image
        // source={images.layfey}
        source={{
          uri: imageUrl,
        }}
        className="w-full h-full rounded-2xl"
        resizeMode="cover"
      />
      <Image source={icons.options} className="ml-36" />
    </View>
  );
};

export default ImageCard;
