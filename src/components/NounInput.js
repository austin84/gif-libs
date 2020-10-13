import React from 'react';

export default function NounInput(props) {
  const handleOnChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className='SearchFields'>
      <div className='inputs'>
        <div className='nounInputDiv'>
          <label>then enter a</label>
          <input
            type='text'
            className='nounInput'
            placeholder='Noun...'
            value={props.nounValue}
            onChange={handleOnChange}
          ></input>
          <label>,</label>
        </div>
      </div>
    </div>
  );
}
