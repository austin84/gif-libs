import React, { useState } from 'react';
import Header from './components/Header';
import SearchFields from './components/SearchFields';
import Results from './components/Results';
import CombinedResults from './components/CombinedResults';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [adjectiveGif, setAdjectiveGif] = useState(() => {
    return {
      url: 'https://giphy.com/embed/3o6MbtSmRdZEB7jnwI',
      alt: '',
    };
  });
  const [nounGif, setNounGif] = useState(() => {
    return {
      url: 'https://giphy.com/embed/l2JdTaFdKBU4uCdJS',
      alt: '',
    };
  });
  const [combinedGif, setCombinedGif] = useState(() => {
    return {
      url: 'https://giphy.com/embed/3o6ZsYIHKbppBG37dm',
      alt: 'adjective and noun combined',
    };
  });
  const [nounValue, setNounValue] = useState('');
  const [adjectiveValue, setAdjectiveValue] = useState('');

  return (
    <div className='App'>
      <Header />
      <SearchFields
        adjectiveGif={adjectiveGif}
        setAdjectiveGif={setAdjectiveGif}
        nounGif={nounGif}
        setNounGif={setNounGif}
        setCombinedGif={setCombinedGif}
        nounValue={nounValue}
        setNounValue={setNounValue}
        adjectiveValue={adjectiveValue}
        setAdjectiveValue={setAdjectiveValue}
      />
      <Results
        adjectiveGif={adjectiveGif}
        setAdjectiveGif={setAdjectiveGif}
        nounGif={nounGif}
        setNounGif={setNounGif}
      />
      <CombinedResults
        combinedGif={combinedGif}
        setCombinedGif={setCombinedGif}
      />
      <Footer />
    </div>
  );
}

export default App;
