import { useState} from 'react'
import Home from './Home'
import './App.css'
import ProductList from './componant/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
