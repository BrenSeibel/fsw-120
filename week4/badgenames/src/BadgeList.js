import React, {Component} from 'react'
import Badge from './BadgeCard'

class BadgeList extends Component {

    render() {
        // console.log(this.props)

        const mappedCards = this.props.nameBadges.map ( card, i => {
            return (
                <BadgeCard
                key = {i}
                index = {i}    
                firstName = {card.firstName}
                lastName = {card.lastName}
                age = {card.age}
                handleDelete = {this.props.handleDelete}
                />
            )
        })

            return  (
                <div>
                    I'm List
                    {mappedCards}
                </div>
            )
        }
}

export default BadgeList