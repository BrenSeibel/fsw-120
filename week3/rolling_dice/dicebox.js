import React from 'react';
import './dicebox.css';
import Die from './die.js';

class Dicebox extends React.Component {
    constructor() {
        super()
        this.state = 
        {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                num1: Math.floor(Math.random() * 6),
                num2: Math.floor(Math.random() * 6),
                num3: Math.floor(Math.random() * 6),
                num4: Math.floor(Math.random() * 6),
                num5: Math.floor(Math.random() * 6),
            }
        })
    }
    render() {
        return (
            <div>
                <Die num={this.state.num1}/>
                <h1 className="dice">{this.state.num2}</h1>
                <h1 className="dice">{this.state.num3}</h1>
                <h1 className="dice">{this.state.num4}</h1>
                <h1 className="dice">{this.state.num5}</h1>
            </div>
        )
    }
}

export default Dicebox;