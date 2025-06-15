import React from 'react';

const Headline = ({titles}) => {
  const separator = <span className='only-wide'> - </span>;
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
      </span>
    </div>
  );
}

export default Presentation;
