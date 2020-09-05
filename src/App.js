import React from 'react';
import Loader from './components/Loader';

const App = () => {
  return (
    <div className="app">
      <Loader/>
      <button>call API</button>
    </div>
  );
}

export default App;
