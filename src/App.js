import React from 'react';
import GetTime from './GetTime';
import TicTacToe from './TicTacToe';
import './App.css';

// Where I build the layout of the App

function App() {
  return (
    <React.Fragment>
      <div style={{ margin: '20px' }}>
        <h1 style={{ color: 'green' }}>Digital Clock</h1>
        <GetTime type={'digiClock'} />
        <h1 style={{ color: 'purple' }}>Countdown Timer</h1>
        <GetTime type={'countdown'} />
        <h1 style={{ color: 'green' }}>Tic-Tac-Toe</h1>
        <TicTacToe />
      </div>
    </React.Fragment>
  );
}

export default App;
