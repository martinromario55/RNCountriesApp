import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function DetailsScreen() {
  const route = useRoute()

  // Accessing the item parameter from the route object
  const { item } = route.params

  console.log(item.name.common)

  return (
    <ScrollView className="p-3" showsVerticalScrollIndicator={false}>
      <View className="items-center my-2 w-[100%]">
        <View className="border border-white border-4 w-[100%] h-52 rounded">
          {/* Image with dummy file */}
          <Image
            source={{
              uri:
                item.flags.png || 'https://picsum.photos/seed/picsum/200/300',
            }}
            resizeMode="cover"
            style={{ width: '100%', height: '100%', borderRadius: 5 }}
          />
        </View>
      </View>

      <View className="my-4">
        <Text className="mt-1 pl-1 font-bold">{item.name.official}</Text>
        <Text className="mt-1 pl-1 text-slate-700">
          {item.flags.alt || 'No Description'}
        </Text>
      </View>

      <View>
        <Text className="mt-1 pl-1 font-bold">Coat of Arms</Text>
        <View className="items-center my-2 w-[100%]">
          <View className="border border-white border-4 w-[100%] h-52 rounded">
            {/* Image with dummy file */}
            <Image
              source={{
                uri:
                  item.coatOfArms.png ||
                  'https://picsum.photos/seed/picsum/200/300',
              }}
              resizeMode="contain"
              style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
          </View>
        </View>
      </View>

      <View className="mt-4">
        <Text className="mt-1 pl-1 font-bold">Other Details</Text>
        <Text className="mt-1 pl-1 text-slate-700">
          Capital city: {item.capital}
        </Text>
        <Text className="mt-1 pl-1 text-slate-700">Region: {item.region}</Text>
        <Text className="mt-1 pl-1 text-slate-700">
          Sub Region {item.subregion}
        </Text>
        <Text className="mt-1 pl-1 text-slate-700">
          Population: {item.population}
        </Text>
      </View>
    </ScrollView>
  )
}
