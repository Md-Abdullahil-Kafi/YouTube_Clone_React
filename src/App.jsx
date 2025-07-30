import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.component'
import Media from './components/media.component'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Media/>
      
    </>
  )
}

export default App
