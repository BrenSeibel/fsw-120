import React from 'react';
import logo from './logo.svg';
import './rolling';
import './rolling.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p id="placeholder"></p>
          <button id="button">Roll Dice</button>
          <script src="dice.js"></script>
          <script src="ui.js"></script>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;










// <html>
// <head>
//     <title>Dice Simulator 2015</title>
//     <link rel="stylesheet" href="style.css">
// </head>  
// <body>
//   <p id="placeholder">
  
//   </p>
//   <button id="button">Roll Dice</button>
//   <script src="dice.js"></script>
//   <script src="ui.js"></script>
// </body>
// </html>