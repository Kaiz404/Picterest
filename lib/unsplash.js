import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';
import {UNSPLASH_API_KEY} from '../config.json';

export const getImages = async (imageCount) => {
  const request = {
    method: 'GET',
    url: `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}`,
    params: {
      'count': imageCount,
    },
  };
  const images = [];

  try {
    const response = await axios.request(request);
    // console.log(JSON.stringify(response, null, 4));
    for (const data of response.data) {
      // console.log(JSON.stringify(data, null, 4))
      // console.log(data.alt_description, ":", data.urls.full, " (", data.width, "x", data.height, ") ");
      // images.push(data.urls.full);
      images.push({
        id: data.id,
        url: data.urls.regular,
        imageWidth: data.width,
        imageHeight: data.height
      });
    }
  } catch (error) {
    console.error(error);
    return [
      {url:"https://images.unsplash.com/photo-1719153863464-b2ee7e28b6df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1719921462717-06a2e551d388?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      {url:"https://images.unsplash.com/photo-1719922326745-0ba9484d02e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1720692393334-c2301df7e0c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      {url:"https://images.unsplash.com/photo-1720728659931-388fa6f62f8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      {url:"https://images.unsplash.com/photo-1721297014914-b6c0d6d612db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1721390252448-4dc6298988ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      {url:"https://images.unsplash.com/photo-1721632978627-f734559321bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000}
    ];
  }

  return images;
};

export const getPhoto = async (imageID) => {
  console.log("Getting photo with ID: ", imageID);
  const request = {
    method: 'GET',
    url: `https://api.unsplash.com/photos/${imageID}/?client_id=${UNSPLASH_API_KEY}`,
  };

  const image = {};

  try {
    const response = await axios.request(request);
    // console.log(JSON.stringify(response.data, null, 4));
    // console.log(response.data.description);
    image.id = response.data.id;
    image.url = response.data.urls.regular;
    image.description = (response.data.description instanceof String) ? response.data.description : response.data.alt_description;
  } catch (error) {
    console.error(error);
    return {
      id: "HSFFWEWE",
      url: "https://images.unsplash.com/photo-1721632978627-f734559321bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85",
      description: "A beautiful image from Unsplash"
    }
  }
  return image;
}

export const searchImages = async (query) => {
  console.log("Searching photo with query: ", query);
  const request = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_API_KEY}`,
    params: {
      'query': query,
      "per_page": "20",
    },
  };
  const images = [];

  try {
    const response = await axios.request(request);
    //console.log(JSON.stringify(response, null, 4));
    for (const result of response.data.results) {
      // console.log(JSON.stringify(result, null, 4))
      console.log(result.alt_description, ":", result.urls.full, " (", result.width, "x", result.height, ") ");
      // images.push(result.urls.full);
      images.push({
        id: result.id,
        url: result.urls.regular,
        imageWidth: result.width,
        imageHeight: result.height
      });
    }
  } catch (error) {
    console.error(error);
    return [
      {url:"https://images.unsplash.com/photo-1719153863464-b2ee7e28b6df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1719921462717-06a2e551d388?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      {url:"https://images.unsplash.com/photo-1719922326745-0ba9484d02e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1720692393334-c2301df7e0c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      {url:"https://images.unsplash.com/photo-1720728659931-388fa6f62f8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 7000},
      {url:"https://images.unsplash.com/photo-1721297014914-b6c0d6d612db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000},
      {url:"https://images.unsplash.com/photo-1721390252448-4dc6298988ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 6000},
      {url:"https://images.unsplash.com/photo-1721632978627-f734559321bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MzAzMTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjE4MzE2ODR8&ixlib=rb-4.0.3&q=85", imageHeight: 5000}
    ];
  }

  return images;
}