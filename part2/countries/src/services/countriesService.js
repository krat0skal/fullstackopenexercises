import axios from 'axios'
const gettAllUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const gettByNameUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'


const getAll = () => {
    const promise = axios.get(gettAllUrl)
    return promise
}

const getByName = (name) => {
    const request = axios.get(gettByNameUrl.concat(`/${name}`))
    console.log('request being sent is ' + (gettByNameUrl.concat(`/${name}`)))
    return request.then(response => response.data)
}

export default { getAll, getByName }