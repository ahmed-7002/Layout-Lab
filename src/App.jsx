import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import ContentLayoutTemplates from './components/ContentLayoutTemplates'
import CardLayoutTemplates from './components/CardLayoutTemplates'
import ImageLayoutTemplates from './components/ImageLayoutTemplates'
import NavbarLayoutTemplates from './components/NavbarLayout'
import FooterLayoutTemplates from './components/FooterLayoutTemplates'
import LoginFormTemplates from './components/LoginFormTemplates'
import ContactFormTemplates from './components/ContactFormTemplates'
import SidebarLayoutTemplates from './components/SidebarLayoutTemplates'
import HeroSectionTemplates from './components/HeroSectionTemplates'

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
          <Route path="/footer" element={<FooterLayoutTemplates/>} />
          <Route path="/login" element={<LoginFormTemplates/>} />
          <Route path="/contact" element={<ContactFormTemplates/>} />
          <Route path="/sidebar" element={<SidebarLayoutTemplates/>} />
          <Route path="/hero" element={<HeroSectionTemplates/>} />
          
         
        </Routes>
      </div>
    </Router>
  )
}

export default App