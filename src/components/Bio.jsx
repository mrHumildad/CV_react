import React from 'react';
const Works = ({text}) => {
  return (
    <div className="works">
     <span className="title">{text.sections.works}</span>
     {}
    </div>
  )
}

const Bio = ({text}) => {
  return (
  <div id="bio">
    <Works/>
    <Studies/>
  </div>
  );
}

export default Bio;
