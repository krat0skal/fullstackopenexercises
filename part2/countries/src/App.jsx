import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import countriesService from './services/countriesService'
function App() {
  const [country, setCountry] = useState('')
  const [countryList, setCountryList] = useState([])



  useEffect(() => {
    console.log('effect')
    countriesService.getAll().then(response => {
      console.log('Country Length')
      console.log(country.length)
      if (country.length != 0) {
        const tempArr = response.data
          .filter(countryResponse => (
            countryResponse.name.common
              .toLowerCase().includes(country.toLowerCase())
          )
          )
          // .map(countryResponse => countryResponse.name.common)
        console.log(tempArr)
        setCountryList(tempArr)
      } else {
        setCountryList([])
      }
    })
  }, [country])

  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  const getCountry = (event) => {
    event.preventDefault()
    console.log(`value of country enterd is ${country}`)
  }

  return (
    <div>
      <form onSubmit={getCountry}>
        find countries
        <input value={country} onChange={handleCountryChange}>
        </input>
      </form>
      <Countries countries={countryList}/>
      {/* {countryList.map(country =>
        <Country key ={country} country={country}/>)} */}
    </div>
  )
}

export default App
