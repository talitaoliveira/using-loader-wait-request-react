import React, { useState } from 'react';
import Loader from './components/Loader'

import './App.css';

const App = () => {
  const [showLoader, setShowLoader] = useState(false)

  const handleForm = (e) => {
    e.preventDefault();
    setShowLoader(true)
  }

  return (
    <div className="app">
      <form onSubmit={handleForm}>
        <label htmlFor="github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user"/>
        <button type="submit">call API</button>
      </form>
      {showLoader && <Loader/>}
    </div>
  );
}

export default App;
