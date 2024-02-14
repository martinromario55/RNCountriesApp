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
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

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

  // searchCountry(searchTerm)
  // console.log(countries)

  // Search function
  const handleSearch = async () => {
    try {
      setIsLoading(true)
      const results = await searchCountry(searchTerm)
      setSearchResults(results)
      setIsLoading(false)
      console.log(results)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  console.log('searchTerm', searchTerm)
  console.log('searchResults', searchResults)

  return (
    <SafeAreaView className="p-3">
      {Platform.OS === 'ios' && <StatusBar style={'auto'} />}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Search
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <ScrollView
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <Countries
              countries={countries}
              results={searchResults}
              handleSearch={searchCountry}
            />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  )
}
