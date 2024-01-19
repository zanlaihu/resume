import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ChineseResume from './Pages/CH';
import EnglishResume from './Pages/EN';

function App() {
  return (
    <div className="App">
      <ChineseResume />
      {/* <EnglishResume /> */}
    </div>
  );
}

export default App;
