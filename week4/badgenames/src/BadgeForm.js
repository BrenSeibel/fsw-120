import React, {Component} from 'react'

class BadgeForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            age: 0
        }
    }
    
    handleChange = () => {
        console.log('hi')
    }

    render () {
        return (
            <div>
                I'm a class component
                First Name :
                <input
                    type = 'text'
                    name = 'firstName'
                    onChange = {this.handleChange}
                 />
                 Age :
                <input
                    type = 'number'
                    name = 'age'
                 />First Name :
                 <input
                     type = 'text'
                  />
                First Name :
                <input
                    type = 'text'
                 />  
            </div>
        )
    }
    

        
}
export default BadgeForm