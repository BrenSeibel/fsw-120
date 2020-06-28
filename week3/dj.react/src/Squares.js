import React from 'react'
import Square from "./Square"

class Squares extends React.Component {
   constructor(){
      super()
      this.state = {
         colors: ['white', 'black', 'white', 'black'],
         randomColors: ['yellow', 'orange', 'red', 'pink']
      }
      this.changeColor = this.changeColor.bind(this)
   }
   randomColorSelector(){
      return this.state.randomColors[Math.floor(Math.random() * 4)]
   }
   changeColor(color, ...arrItems){
      let colors = this.state.colors
      let colorArr = colors
      if ((color === 'red') && (colorArr[0] === 'white')){
         color = 'brown'
      }
      for (let i = 0; i < colors.length; i++){
         console.log(arrItems.indexOf(i))
         if (arrItems.includes(i)){
            color !== 'white' && colors[i] === color ? colorArr[i] = this.randomColorSelector() :
            colorArr[i] = color
         } else {
            colorArr[i] = this.state.colors[i]
         }
      }
      this.setState(prevState => {
         return {
            colors: colorArr
         }
      })
   }
   render() {
      const colorArr = this.state.colors
      const squares = colorArr.map((square, i) => <Square color={colorArr[colorArr.indexOf(square)]} key={i}/>)
      return (
         <div>
            <div id="container" style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr"}}>
               {squares}
            </div>
            <div>
               <button onClick={() => this.changeColor('white', 0, 1, 2, 3)}>Change All </button>
               <button onClick={() => this.changeColor('purple', 0, 1)}>Change Top 2 </button>
               <button onClick={() => this.changeColor('blue', 2)}>Change Left </button>
               <button onClick={() => this.changeColor('blue', 3)}>Change Right </button>
               <button onClick={() => this.changeColor('brown', 0, 1, 2)}>Change 3 </button>
               <button onClick={() => this.changeColor(`${this.randomColorSelector()}`, Math.floor(Math.random() * 4))}>Change Random</button>
               <button onClick={() => this.changeColor('yellow', 2)}>Change Left </button>
               <button onClick={() => this.changeColor('red', 3)}>Change Right </button>
            </div>
         </div>
      )
   }
}
export default Squares