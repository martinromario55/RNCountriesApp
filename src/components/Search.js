import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View className="mb-4">
      <TouchableOpacity className="border border-stone-600 rounded-xl bg-white px-2">
        <TextInput placeholder="Search for a country" className="text-bold" />
      </TouchableOpacity>
    </View>
  )
}
