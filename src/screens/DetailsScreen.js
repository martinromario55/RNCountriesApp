import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export default function DetailsScreen() {
  return (
    <ScrollView className="p-3" showsVerticalScrollIndicator={false}>
      <View className="items-center my-2 w-[100%]">
        <View className="border border-white border-4 w-[100%] h-52 rounded">
          {/* Image with dummy file */}
          <Image
            source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
            resizeMode="cover"
            style={{ width: '100%', height: '100%', borderRadius: 5 }}
          />
        </View>
      </View>

      <View>
        <Text className="mt-1 pl-1 font-bold">Uganda</Text>
        <Text className="mt-1 pl-1 text-slate-700">For God and My Country</Text>
      </View>

      <View>
        <Text className="mt-1 pl-1 font-bold">Coat of Arms</Text>
        <View className="items-center my-2 w-[100%]">
          <View className="border border-white border-4 w-[100%] h-52 rounded">
            {/* Image with dummy file */}
            <Image
              source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
              resizeMode="cover"
              style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
          </View>
        </View>
      </View>

      <View>
        <Text className="mt-1 pl-1 font-bold">Other Details</Text>
        <Text className="mt-1 pl-1 text-slate-700">Capital City </Text>
        <Text className="mt-1 pl-1 text-slate-700">Region</Text>
        <Text className="mt-1 pl-1 text-slate-700">Sub Region</Text>
        <Text className="mt-1 pl-1 text-slate-700">Population</Text>
      </View>
    </ScrollView>
  )
}
