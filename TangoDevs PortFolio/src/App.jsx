import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

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
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </div>
  );
}

export default App;
