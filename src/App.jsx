import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import About from './About'
import TeraboxDownloader from './Front'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import YTdown from './YTdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<TeraboxDownloader />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/youtube-Down" element={<YTdown/>}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
