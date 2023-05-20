import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Adress'
import FullName from './Components/Profile/FullName';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <body><ProfilePhoto />
      <FullName />
      <Address /></body>
      
    </div>
  );
};

export default App;
