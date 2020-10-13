import React from 'react';

export default function Results(props) {
  return (
    <>
      <h3 className='resultsTitle'>Gif Results</h3>
      <div className='Results'>
        <div className='adjectiveResult'>
          <iframe
            src={props.adjectiveGif.url}
            title={props.adjectiveGif.alt}
            value={props.adjectiveValue}
            height='270'
            width='480'
          ></iframe>
        </div>
        <div className='nounResult'>
          <iframe
            src={props.nounGif.url}
            title={props.nounGif.alt}
            value={props.nounValue}
            height='270'
            width='480'
          ></iframe>
        </div>
      </div>
    </>
  );
}
