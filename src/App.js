import React from 'react';
import Header from './components/Header';
import SearchFields from './components/SearchFields';
import Results from './components/Results';
import CombinedResults from './components/CombinedResults';
import Footer from './components/Footer';
import './App.css';

function App() {
  // const [data, setData] = useState([]);
  return (
    <div className='App'>
      <Header />
      <SearchFields />
      <Results />
      <CombinedResults />
      <Footer />
    </div>
  );
}

export default App;
