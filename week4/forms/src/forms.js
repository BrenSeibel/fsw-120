import React, {Component} from "react"

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type = "text" name = "firstName" placeholder = "First Name" onChange = {this.handleChange} />
                <h1>{this.state.firstName}</h1>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    class list extends React.Component {
        render() {
          return (
              <ol>
                  <li>Amy</li>
                  <li>Brooklyn</li>
                  <li>Zack</li>
              </ol>
          )
        }
      }
}

export default Forms

