import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import ContentLayoutTemplates from './components/ContentLayoutTemplates'
import CardLayoutTemplates from './components/CardLayoutTemplates'
import ImageLayoutTemplates from './components/ImageLayoutTemplates'
import NavbarLayoutTemplates from './components/NavbarLayout'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation/>
        <Header/>
        <Routes>
          <Route path="/" element={<ContentLayoutTemplates/>} />
          <Route path="/content" element={<ContentLayoutTemplates/>} />
          <Route path="/cards" element={<CardLayoutTemplates/>} />
          <Route path="/images" element={<ImageLayoutTemplates/>} />
          <Route path="/navbar" element={<NavbarLayoutTemplates/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App