import React, { useState } from 'react';
import Loader from './components/Loader/Loader'

import './App.css';

const App = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleForm = (e) => {
    e.preventDefault();
    setShowLoader(true)
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          setShowLoader(false)
        })
        .catch((err) => {
          setHasError('Ooops... Deu alguma merda.')
          setShowLoader(false)
        })
  }

  return (
    <div className="app">
      <form onSubmit={handleForm} className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user" onChange={e=>setUsername(e.target.value)}/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      {showLoader && <Loader/>}
      {hasError && <p data-testid="error-message">{hasError}</p>}
    </div>
  );
}

export default App;
