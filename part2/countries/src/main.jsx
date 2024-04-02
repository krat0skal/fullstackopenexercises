import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
const promise = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')

promise.then(response => {
  console.log(response.data)
})