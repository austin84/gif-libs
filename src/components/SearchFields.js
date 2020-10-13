import React from 'react';
import AdjectiveInput from './AdjectiveInput';
import NounInput from './NounInput';

export default function SearchFields(props) {
  const handleOnSubmit = (e) => {
    if (props.nounValue !== '')
      try {
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=${props.nounValue}&limit=1&offset=0&rating=r&lang=en`
        )
          .then((res) => res.json())
          .then((json) => {
            props.setNounGif({
              url: json.data[0].embed_url,
              alt: '',
            });
          });
      } catch (err) {
        console.log(err);
      }

    if (props.adjectiveValue !== '')
      try {
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=${props.adjectiveValue}&limit=1&offset=0&rating=r&lang=en`
        )
          .then((res) => res.json())
          .then((json) => {
            props.setAdjectiveGif({
              url: json.data[0].embed_url,
              alt: 'adjective',
            });
          });
      } catch (err) {
        console.log(err);
      }

    if (props.adjectiveValue !== '' && props.nounValue !== '')
      try {
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=a15jk0QUUQFTun4jox8DnPfZd701vIX2&q=${props.adjectiveValue}%20${props.nounValue}&limit=1&offset=0&rating=r&lang=en`
        )
          .then((res) => res.json())
          .then((json) => {
            props.setCombinedGif({
              url: json.data[0].embed_url,
              alt: 'noun',
            });
          });
      } catch (err) {
        console.log(err);
      }

    props.setAdjectiveValue('');
    props.setNounValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className='SearchFields'>
        <AdjectiveInput
          setGifs={props.setGifs}
          value={props.adjectiveValue}
          setValue={props.setAdjectiveValue}
        />
        <NounInput
          setGifs={props.setGifs}
          value={props.nounValue}
          setValue={props.setNounValue}
        />
      </div>
      <input className='submitBtn' type='submit' value="Mix 'em Up"></input>
    </form>
  );
}
