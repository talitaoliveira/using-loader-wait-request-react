import React, { useState } from 'react';
import Loader from '../Loader/Loader'
import UserData from './UserData/UserData'

import './FormUserData.css';

const FormUserData = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({})


  const handleForm = (e) => {
    e.preventDefault();
    setShowLoader(true)
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          if(data.message === "Not Found") {
            setErrorMessage('Nenhum usuário encontrado, recarrege a pagina')
            setHasError(true)
          }
          setUserData(data)
          setShowLoader(false)
        })
        .catch((err) => {
          setHasError(true)
          setShowLoader(false)
        })
  }

  if(hasError) {
    throw new Error(errorMessage);
  }

  const isObjectEmpty = (myObject) => {
    return Object.entries(myObject).length > 0
  }

  return (
    <>
      <form onSubmit={handleForm} className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user" onChange={e=>setUsername(e.target.value)}/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      {showLoader && <Loader/>}
      {isObjectEmpty(userData) && <UserData data={userData} />}
    </>
  );
}

export default FormUserData;
