import React from 'react';

const Presentation = ({userData}) => {
  const headline = userData.titles.join(' - ');

  return (
    <div id='presentation'>
      <span id='headline'>
        {headline}
      </span>
    </div>
  );
}

export default Presentation;
