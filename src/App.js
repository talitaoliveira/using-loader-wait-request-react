import React from 'react'
import FormUserData from './components/FormUserData/FormUserData'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import './App.css';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <FormUserData></FormUserData>
      </ErrorBoundary>
    </div>
  );
}

export default App;
