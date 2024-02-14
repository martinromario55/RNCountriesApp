const baseUrl = 'https://restcountries.com/v3.1'

const countriesUrl = `${baseUrl}/subregion/Eastern%20Africa?fields=name,flag,capital,region,subregion,languages,population,flags,coatOfArms`

export async function getCountries() {
  const response = await fetch(countriesUrl)
  const data = await response.json()
  return data
}

// Search for a single country
export async function searchCountry(name) {
  const response = await fetch(`${baseUrl}/name/${name}?fields=name,flag,capital,region,subregion,languages,population,flags,coatOfArms`)
  const data = await response.json()
  return data
}