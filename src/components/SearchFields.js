import React from 'react';

export default function SearchFields() {
  return (
    <div className='SearchFields'>
      <form>
        <div className='inputs'>
          <div className='adjectiveInputDiv'>
            <label>Please enter an</label>
            <input
              type='text'
              className='adjectiveInput'
              placeholder='Adjective...'
            ></input>
            <label>,</label>
          </div>
          <div className='nounInputDiv'>
            <label>and then enter a</label>
            <input
              type='text'
              className='nounInput'
              placeholder='Noun...'
            ></input>
            <label>.</label>
          </div>
        </div>
        <input className='submitBtn' type='submit' value="Mix 'em Up" />
      </form>
    </div>
  );
}
