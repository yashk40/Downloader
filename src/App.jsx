import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import TeraboxDownloader from './Front'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <TeraboxDownloader/>
    </>
  )
}

export default App
