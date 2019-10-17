import React from 'react';
import CountdownTimer from './CountdownTimer';
import GetTime from './GetTime';
import './App.css';

// Where I build the layout of the App

function App() {
  return (
    <React.Fragment>
      <div style={{ margin: '20px' }}>
        <h1 style={{ color: 'green' }}>A Digital Clock</h1>
        <GetTime type={'digiClock'} />
        <h1 style={{ color: 'purple' }}>A Countdown Timer</h1>
        <GetTime type={'countdown'} />
      </div>
    </React.Fragment>
  );
}

export default App;
