import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Countries from '../components/Countries'
import { getCountries, searchCountry } from '../utils/ApiControl'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      setIsLoading(true)
      getCountries().then(data => setCountries(data))
      // console.log(countries)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }, [])

  return (
    <SafeAreaView className="p-3">
      {Platform.OS === 'ios' && <StatusBar style={'auto'} />}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {/* <Search /> */}
          <ScrollView
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <Countries countries={countries} handleSearch={searchCountry} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  )
}
