import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Contact, Home, SideBar, Proyects } from './components/index';


function App() {  
  const localLanguage= navigator.language.toLowerCase()
  const [language, setLanguage] = useState(localLanguage.startsWith('es')? 'es': 'en')

  console.log(language);

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
        <Route path='proyects' element={<Proyects/>}/>
      </Routes>
    </div>
  );
}

export default App;
