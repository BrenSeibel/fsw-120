import React from 'react';
import './rolling.css';
import Dice from './dice'


function App() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber() {
    var placeholder = document.getElementsByClassName('placeholder');
for (let i = 0; i < placeholder.length; i++)
{var result = dice.roll();
placeholder[i].innerHTML = result};
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h1>Rolling Dice</h1>
          <div style={{display:"flex", justifyContent:" space-evenly"}}>
           <Dice/>
           <Dice/>
           <Dice/>
           <Dice/>
           <Dice/>
           </div>
          <button onClick = { function() {
          //  var result = dice.roll();
           printNumber();
        }} id="button">Roll Dice</button>
          </p>
       
      </header>
    </div>
  );
}

export default App;




