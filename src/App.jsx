import { useState } from 'react'
import './App.css'
import './print.css'
import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import {translations} from './trans.js'
import { useEffect } from 'react'
function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    document.title = translations[lang].title;
    document.documentElement.lang = lang;
  }, [lang]);
  const changeLang = () => {
    const langIndex = ['en', 'es', 'cat', 'it'].indexOf(lang);
    const nextLangIndex = (langIndex + 1) % 4; // Cycle through languages
    setLang(['en', 'es', 'cat', 'it'][nextLangIndex]);
  }
  const userData = translations[lang];
  //console.log(userData)
  return (
    <div className="App">
      <div className={'no-print'} style={{height: '9vh'}}></div>
      <Header userData={userData}/>
      <Presentation userData={userData}/>
      <Section lang={lang} name={'work'} />
      <Section lang={lang} name={'studies'} />
      <Section lang={lang} name={'projects'} />
      <Section lang={lang} name={'it'} />
      <span className='section-title'>{translations[lang].sections.other}</span>
      <div id='other-skills'>
        <Section lang={lang} name={'languages'} className={'other'} />
        <Section lang={lang} name={'creative'} className={'other'} />
        <Section lang={lang} name={'social'} className={'other'} />
      </div>
      <div className={'no-print'} style={{height: '10vh'}}></div>
      <Footer changeLang={changeLang}/>
      
    </div>
  )
}

export default App
