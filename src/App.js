import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Adress'
import FullName from './Components/Profile/FullName';
import './App.css'
const App = () => {
  return (
    <div className="App">
      {/* Ici on trouve component ProfilePhoto */}
        <ProfilePhoto />
      <FullName />
      <Address />
      
      
    </div>
  );
};

export default App;
