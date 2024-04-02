import Country from "./Country"
import CountryData from "./CountryData"

const Countries =({countries}) => {
    const tooMany = 'Too many matches, specify another filter'
    if (countries.length > 10) {
        console.log('Length greater than 10')
        return(<div>
            {tooMany}
        </div>)
    } else if (countries.length > 1) {
        console.log('Length lesser than 10 calling country component')
        return(countries.map(country => 
            <Country key={country.name.common} country={country}/>))
    } else if (countries.length == 1){
        console.log('Only 1 country, time to call api and show data')
        return(
            <CountryData country={countries} renderedInd={true}/>
        )
    }
}

export default Countries