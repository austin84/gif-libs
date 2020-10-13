import React from 'react';

export default function CombinedResults(props) {
  return (
    <>
      <h3 className='combinedResultsTitle'>Combined Gif Result</h3>
      <div className='CombinedResults'>
        <div className='CombinedResultsChild'>
          <iframe
            src={props.combinedGif.url}
            title={props.combinedGif.alt}
            height='338'
            width='480'
          ></iframe>
        </div>
      </div>
    </>
  );
}
