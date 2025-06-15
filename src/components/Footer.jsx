import React from 'react';
import { links } from '../trans';

const Footer = () => {

  const printPDF = () => {
    window.print();
  }

  return (
    <div className='Footer'>
      <a className='footer-butt' id='telephone' href={"tel:" + links.telephone}></a>
      <a className='footer-butt' id='mail' href={"mailto:" + links.mail}></a>
      <a className='footer-butt' id='pdf' href="#" onClick={printPDF}></a>
      <a className='footer-butt' id='linkedin' href={links.linkedin}></a>
      <a className='footer-butt' id='github' href={links.github}></a>
    </div>
  );
}

export default Footer;
