import CountryData from "./CountryData"
import { useState } from "react"

const Country =({country}) => {
    var showCountry = [country]
    const [toShow, setToShow] = useState(false)

    const showData =() =>{
        console.log('button clicked')
        setToShow(!toShow)
    }
    const buttonLabel = toShow ? 'Hide' : 'Show' 
    return(
        <div>
            {country.name.common} <button onClick={showData}>{buttonLabel}</button>
            <CountryData country={showCountry} renderedInd={toShow}/>
        </div>
    )
}

export default Country