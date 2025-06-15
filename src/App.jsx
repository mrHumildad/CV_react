import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Footer from './components/Footer.jsx'
import {translations} from './trans.js'
import Section from './components/Section.jsx'
import { useEffect } from 'react'
function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    document.title = translations[lang].title;
    document.documentElement.lang = lang;
  }, [lang]);
  const changeLang = (newLang) => {
    setLang(newLang)
  }
  const userData = translations[lang];
  //console.log(userData)
  return (
    <div className="App">
      <Header userData={userData}/>
      <Presentation userData={userData}/>
      <Section lang={lang} name={'work'} />
      <Section lang={lang} name={'studies'} />
      <Section lang={lang} name={'projects'} />
      <Section lang={lang} name={'it'} />
      <span className='section-title'>{translations[lang].sections.other}</span>
      <div className='other-skills'>
        <Section lang={lang} name={'languages'} className={'other'} />
        <Section lang={lang} name={'creative'} className={'other'} />
        <Section lang={lang} name={'social'} className={'other'} />
      </div>
      <div style={{height: '10vh'}}></div>
      <Footer changeLang={changeLang}/>
    </div>
  )
}

export default App
