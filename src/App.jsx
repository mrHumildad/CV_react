import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Presentation from './components/Presentation.jsx'
import Skills from './components/Skills.jsx'
import Bio from './components/Bio.jsx'
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
  console.log(userData)
  return (
    <div className="App">
      <Header userData={userData}/>
      <Presentation userData={userData}/>
      <Section name={userData.sections.work} sectionData={userData.bio.work} />
      <Section name={userData.sections.studies} sectionData={userData.bio.studies} />
      <Section name={userData.sections.projects} sectionData={userData.bio.projects} />
      <Section name={userData.sections.it} sectionData={userData.skills.IT} />
        <span className='section-title'>{userData.sections.other}</span>
      <div className='other-skills'>
        <Section name={userData.sections.languages} sectionData={userData.skills.languages} className={'other'} />
        <Section name={userData.sections.creative} sectionData={userData.skills.creative} className={'other'} />
        <Section name={userData.sections.social} sectionData={userData.skills.social} className={'other'} />

      </div>
      {/* <Bio userData={userData}/>
      <Skills userData={userData}/>
      <Footer userData={userData} changeLang={changeLang}/> */}
    </div>
  )
}

export default App
