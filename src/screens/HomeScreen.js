import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Countries from '../components/Countries'

export default function HomeScreen() {
  return (
    <SafeAreaView className="p-3">
      <Search />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Countries />
      </ScrollView>
    </SafeAreaView>
  )
}
