import React from 'react';
import data from './heroesList.json'
import superHero from "./superHero"

class heroesList extends React.Component {
    constructor() {
        super()
        this.state = {
            heroes : data
        }
    }

    render () {
        const heroesList = this.state.heroes.map(item => <superHero key = {item.id} item = {item} handleClick = {this.handleClick}/>)

        return (
            <div>
                {heroesList}
            </div>
        )
    }
}

export default heroesList