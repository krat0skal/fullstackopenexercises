import { useState } from "react"
import countriesService from "../services/countriesService"

const CountryData = ({ country }) => {
    if (country) {
        var languageList = []
        console.log('in country dta')
        console.log(country)
        console.log(country[0].name)
        console.log(country[0].languages)
        for (const key in country[0].languages) {
            console.log(`${key} : ${country[0].languages[key]}`)
            languageList.push(country[0].languages[key])
        }
        return (
            <div>
                <h2>{country[0].name.common}</h2>
                <div>capital {country[0].capital[0]}</div>
                <div>area {country[0].area}</div>

                <h4>languages:</h4>
                {languageList.map(language =>
                    <li key={language}>
                        {language}
                    </li>)}
                
                <img src={country[0].flags['svg']} width={120}></img>
            </div>
        )
    }
}

export default CountryData