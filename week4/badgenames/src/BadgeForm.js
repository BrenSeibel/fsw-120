import React, {Component } from 'react'
import BadgeList from './BadgeList'

class BadgeForm extends Component {
    constructor(){
        super()
        this.state={
          firstName: '',
          lastName: '',
          age: 0,
          nameBadges: []
        }
    }

    handleChange = (e) => {
        // console.dir(e.target)
        // let name = e.target.name
        // let value = e.target.value
        const { name, value } = e.target
        this.setState({ [name] : value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }
        this.setState({ 
            nameBadges : [ newUserData, ...this.state.nameBadges ], 
            firstName: '', 
            lastName: '',
            age: 0, 
        })
    }


    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }


    render(){
        return(
            <div>
                Hi im a class component
                <label> 
                    First Name : 
                </label>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required={true}
                    />
                    <input 
                        type='text'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    Email: 
                    <input 
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    Place of Birth:
                    <input 
                        type='text'
                        name='placeOfBirth'
                        value={this.state.placeOfBirth}
                        onChange={this.handleChange}
                    />
                    Phone:
                    <input
                        type='number'
                        name='phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    Favorite Food:
                    <input
                        type='text'
                        name='favoriteFood'
                        value={this.state.favoriteFood}
                        onChange={this.handleChange}
                    /> 
                    Tell us about yourself:
                    <input
                        type='text'
                        name='tellUsAboutYourself'
                        value={this.state.tellUsAboutYourself}
                        onChange={this.handleChange}
                    />

                    <button> Submit </button>
                </form>

                <BadgeList 
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />
               
            </div>
        )
    }
}

export default BadgeForm