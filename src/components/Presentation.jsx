import React from 'react';
import { links } from '../trans';
import { IoLogoLinkedin, IoCall,  IoMail, IoDocumentText, IoLanguage, IoLogoGithub} from "react-icons/io5";


const Headline = ({titles}) => {
  const separator = <span className='separator'> - </span>;
  return titles.map((title, index) => (
    <span key={index}>
      <span className='user-title'>
        {title}
      </span>
      {index < titles.length - 1 && separator}
    </span>
  ));
}

const Presentation = ({userData}) => {
  //const headline = userData.titles.join(' - ');

  return (
    <div id="presentation">
      <span id="headline">
        <Headline titles={userData.titles} />
        <div className='printPres print'>
          <div className='qr-container'>
            <img src='src/assets/qr-code.png' alt="QR Code" id='qr' />
            <span className='qr-label'>scan to access the responsive version.</span>
          </div>
          <ul className='links'>
              <li className='print-link' id='telephone' ><IoCall/>{links.telephone}</li>
              <li className='print-link' id='mail' ><IoMail/>{links.mail}</li>
              <li className='print-link' id='linkedin' ><IoLogoLinkedin/>{links.linkedin}</li>
              <li className='print-link' id='github'><IoLogoGithub/>{links.github}</li>
          </ul>
        </div>
      </span>
    </div>
  );
}

export default Presentation;
