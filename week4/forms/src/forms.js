import React, {Component} from "react"
import Listname from "./listname"

class Forms extends Component {
    constructor() {
        super()
        this.state = { 
            listItem: [],
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleListitem = this.handleListitem.bind(this)
    }

    handleChange(event) {
        event.preventDefault ()
        this.setState({
            firstName: event.target.value
        })
    }

    handleListitem(event) {
        event.preventDefault ()
        this.setState({
            listItem: this.state.listItem.concat(this.state.firstName)
        })
    }

    render() {
        return (
            <div>
            <form>
                <input type = "text" name = "firstName" placeholder = "First Name" onChange = {this.handleChange} />
                <h1>{this.state.firstName}</h1>
                <button onClick = {this.handleListitem} >
                    Submit
                </button> 
                
            </form>
            <Listname text={this.state.listItem}/>
            </div>
        )
    }

    // // class list extends React.Component {
    //     render() {
    //       return (
    //           <ol>
    //               <li>Amy</li>
    //               <li>Brooklyn</li>
    //               <li>Zack</li>
    //           </ol>
    //       )
    //     }
    //   }
}

export default Forms

