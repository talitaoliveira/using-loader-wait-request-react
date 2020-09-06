import React, { useState } from 'react';
import Loader from './components/Loader'

const App = () => {
  const [showLoader, setShowLoader] = useState(false)

  const activateLoader = () => {
    setShowLoader(true)
  }

  return (
    <div className="app">
      <label htmlFor="github-user">Github User:</label>
      <input type="text" id="github-user"/>
      <button onClick={activateLoader}>call API</button>

      {showLoader && <Loader/>}
    </div>
  );
}

export default App;
