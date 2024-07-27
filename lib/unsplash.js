import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';


export const getUnsplash = (imageCount) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getImages = async () => {

    const request = {
      method: 'GET',
      url: 'https://api.unsplash.com/photos/random/?client_id=hNAX0V3jWdpsCN_8ivn28dhjvZzyfGZ0qMISPbM8GeU',
      params: {
        'count': imageCount,
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(request);
      const images = [];
      // console.log(JSON.stringify(response, null, 4));
      for (const data of response.data) {
        // console.log(JSON.stringify(data, null, 4))
        console.log(data.alt_description, ":", data.urls.full, " (", data.width, "x", data.height, ") ");
        // images.push(data.urls.full);
        images.push({
          url: data.urls.full,
          imageWidth: data.width,
          imageHeight: data.height
        });
      }

      setData(images);
    } catch (error) {
      console.error(error);
      // setData([
      //   {url:"https://images.unsplash.com/photo-1719153863464-b2ee7e28b6df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      //   {url:"https://images.unsplash.com/photo-1719921462717-06a2e551d388?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      //   {url:"https://images.unsplash.com/photo-1719922326745-0ba9484d02e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      //   {url:"https://images.unsplash.com/photo-1720692393334-c2301df7e0c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      //   {url:"https://images.unsplash.com/photo-1720728659931-388fa6f62f8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      //   {url:"https://images.unsplash.com/photo-1721297014914-b6c0d6d612db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      //   {url:"https://images.unsplash.com/photo-1721390252448-4dc6298988ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      //   {url:"https://images.unsplash.com/photo-1721632978627-f734559321bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000}
      // ])
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(data);

  return [data, isLoading];
};
