import React from 'react';

export default function SearchFields() {
  return (
    <div className='SearchFields'>
      <div className='adjectiveDiv'>
        <p>Please enter an</p>
        <input
          type='text'
          className='adjectiveInput'
          placeholder='Adjective...'
        ></input>
      </div>
      <div className='nounDiv'>
        <p>and then, enter a</p>
        <input type='text' className='nounInput' placeholder='Noun...'></input>
        <p>.</p>
      </div>
    </div>
  );
}
