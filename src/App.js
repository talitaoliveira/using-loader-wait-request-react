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
      <form onSubmit={handleForm} className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user"/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      {showLoader && <Loader/>}
    </div>
  );
}

export default App;
