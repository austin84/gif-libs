import React from 'react';

export default function AdjectiveInput(props) {
  const handleOnChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className='SearchFields'>
      <div className='inputs'>
        <div className='adjectiveInputDiv'>
          <label>Please enter an</label>
          <input
            type='text'
            className='adjectiveInput'
            placeholder='Adjective...'
            value={props.adjectiveValue}
            onChange={handleOnChange}
          ></input>
          <label>,</label>
        </div>
      </div>
    </div>
  );
}
