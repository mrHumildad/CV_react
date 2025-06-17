import React from 'react';
import { links } from '../trans';
import { IoLogoLinkedin, IoCall,  IoMail, IoDocumentText, IoLanguage, IoLogoGithub} from "react-icons/io5";

const Footer = ({changeLang}) => {

  const printPDF = () => {
    window.print();
  }

  return (
    <div className='Footer no-print'>
      <a className='footer-butt' id='telephone' href={"tel:" + links.telephone}><IoCall/></a>
      <a className='footer-butt' id='mail' href={"mailto:" + links.mail}><IoMail/></a>
      <a className='footer-butt' id='pdf' href="#" onClick={printPDF}><IoDocumentText /></a>
      <a className='footer-butt' id='lang' href="#" onClick={changeLang}><IoLanguage /></a>
      <a className='footer-butt' id='linkedin' href={links.linkedin}><IoLogoLinkedin/></a>
      <a className='footer-butt' id='github' href={links.github}><IoLogoGithub/></a>
    </div>
  );
}

export default Footer;
