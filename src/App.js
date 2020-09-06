import React from 'react';
const App = () => {
  return (
    <div className="app">
      <label htmlFor="github-user">Github User:</label>
      <input type="text" id="github-user"/>
      <button>call API</button>
    </div>
  );
}

export default App;
