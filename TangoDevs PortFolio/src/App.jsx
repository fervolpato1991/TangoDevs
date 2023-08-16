import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import './App.scss'
import { useState } from 'react'
function App() {
  const localLanguage= navigator.language.toLowerCase()
  const [language, setLanguage] = useState(localLanguage.startsWith('es')? 'es': 'en')

  let docTitle = document.title;
  window.addEventListener("blur", ()=>{document.title= "Don't leave us "})

  window.addEventListener("focus", ()=>document.title= docTitle)

  const changeLanguageEN=()=>{
    setLanguage('en')
  }
  const changeLanguageES=()=>{
    setLanguage('es')
  }

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout language={language} changeLanguageEN={changeLanguageEN} changeLanguageES={changeLanguageES} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About language={language} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects language={language} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
