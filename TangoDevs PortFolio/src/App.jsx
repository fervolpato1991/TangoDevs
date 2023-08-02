import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Contact, Home, SideBar, Projects, About } from './components/index';


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
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
