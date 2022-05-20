import { StyleSheet, Image, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from 'expo-media-library'
export default function PhotosGrid({ type }) {
  const [albumPhotos, setAlbumPhotos] = useState([])
  type = "Camera"
  useEffect(() => {
    // getting
    const loadingImage = async () => {
      let { status } = await MediaLibrary.requestPermissionsAsync();
      const getPhotos = await MediaLibrary.getAlbumAsync(type);
      setAlbumPhotos(await MediaLibrary.getAssetsAsync({
        albumt: getPhotos,
        sortBy: ['creationTime'],
        mediaType: ['photo']
      }))
    }

    loadingImage()
  }, [])
  console.log(albumPhotos.assets)
  return (
    <View style={{ padding: 30, marginTop: 30, flex: 1}}>
      <FlatList
        data={albumPhotos.assets}
        keyExtractor={(photo) => photo.id}
        renderItem={({ item }) => 
          (
            <Image source={{uri: item.uri, isStatic: true}} style={{width: "100" , height:"100", resizeMode: 'contain'}}
            />
            // <Text>{item.uri}</Text>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})