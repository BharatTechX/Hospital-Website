
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Home from './page/Home'
import About from './page/About'
import OurTeam from './page/OurTeam'
import Gallery from './page/Gallery'
import Service from './page/Service'
import Contact from './page/Contact'
import Footer from './component/Footer'

import { ThemeProvider } from './component/ThemeContext'






function App() {

  
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Navbar />
          <div className='content' style={{ padding: "10px" }}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/gallery" element={< Gallery />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          {/* <h1><object data="" type=""></object></h1> */}
          
          <Footer />
        </Router>
      </ThemeProvider>
    </>

  )
}

export default App
