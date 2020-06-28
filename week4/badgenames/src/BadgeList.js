import React, {Component} from 'react'
import Badge from './BadgeCard'

class List extends Component {

    render() {
        console.log(this.props)

        const mappedCards = this.props.nameBadges.map ( card => {
            return (
                <Badge

                firstName = {card.firstName}
                lastName = {card.lastName}
                age = {card.age}
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

export default List