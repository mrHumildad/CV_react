import { useState } from 'react'
import './App.css'
import './print.css'
import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import {translations} from './trans.js'
import { useEffect } from 'react'
import { usePleaseStay } from 'react-use-please-stay';


function App() {
  const [lang, setLang] = useState('en')
  usePleaseStay({
    titles: [
      "MAX",
      "WANTS",
      "TO",
      "WORK",
      "WITH",
      "YOU!"
    ],
    interval: 1000,
    animationType: Animation.LOOP,
    alwaysRunAnimations: true
  })
  useEffect(() => {
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
      <div className={'no-print ghost'}></div>
      <Header userData={userData}/>
      <Presentation userData={userData}/>
      <Section lang={lang} name={'work'} />
      <Section lang={lang} name={'studies'} />
      <Section lang={lang} name={'projects'} />
      <Section lang={lang} name={'it'} />
      <span className='section-title'>{translations[lang].sections.other}</span>
      <div id='skills'>
        <Section lang={lang} name={'languages'} className={'skill'} />
{/*         <Section lang={lang} name={'it'} className={'skill'} />*/}
        <Section lang={lang} name={'creative'} className={'skill'} />
        <Section lang={lang} name={'social'} className={'skill'} />
      </div>
      <div className={'no-print ghost'} ></div>
      <Footer changeLang={changeLang}/>
      
    </div>
  )
}

export default App
