import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import About from './components/About/About';

function App() {  
  const localLanguage= navigator.language.toLowerCase()
  const [language, setLanguage] = useState(localLanguage.startsWith('es')? 'es': 'en')

  let docTitle = document.title;
  window.addEventListener("blur", ()=>{document.title= "Don't leave us "})

  window.addEventListener("focus", ()=>document.title= docTitle)

  const changeLanguageEN=()=>{
    if(language !== 'en') setLanguage('en')
  }
  const changeLanguageES=()=>{
    if (language !== 'es') setLanguage('es')
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/about' element={<About language={language} />} />
      </Routes>
    </div>
  );
}

export default App;
