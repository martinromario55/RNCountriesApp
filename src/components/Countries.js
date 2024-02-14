import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Search from './Search'

export default function Countries({ countries }) {
  const navigation = useNavigation()
  // const data = [
  //   {
  //     country: {
  //       name: 'United States of America',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'United Kingdom',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'China',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'Japan',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'India',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'Russia',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'Germany',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  //   {
  //     country: {
  //       name: 'France',
  //       imageUrl: 'https://picsum.photos/200/300',
  //       description: 'The land of the free, and the home of the brave.',
  //     },
  //   },
  // ]
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        className="items-center my-2 w-[100%]"
        onPress={() => navigation.navigate('Details', { item })}
      >
        <View className="border border-white border-4 w-[100%] h-52 rounded">
          {/* Image with dummy file */}
          <Image
            source={{
              uri: item.flags.png || 'https://picsum.photos/200/300',
            }}
            resizeMode="cover"
            style={{ width: '100%', height: '80%', borderRadius: 5 }}
          />
          <Text className="mt-4 pl-1 font-bold capitalize">
            {item.name.common}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      data={countries}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      nestedScrollEnabled={true}
      scrollEnabled={false}
    />
  )
}
