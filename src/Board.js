import React, { Component } from 'react'
import IconHeader from './IconHeader'
import FriendCard from './FriendCard'
import { Divider, Card, Container } from 'semantic-ui-react'
import friendFaces from './friend-faces'

class FriendList extends Component {
    render() {
        const friendList = friendFaces.map(friend => (
            <FriendCard
                key={friend.id}
                id={friend.id}
                avatar={friend.avatar}
                firstName={friend.name.first}
                joined={friend.joined}
                jobTitle={friend.jobTitle}
                city={friend.city}
                state={friend.state}
                friends={friend.friends}
            />
        ))
        return friendList
    }
}

class Board extends Component {
    render() {
        return (
            <div>
                <IconHeader />
                <Divider />
                <Container>
                    <Card.Group itemsPerRow={5}>
                        <FriendList /> 
                    </Card.Group>
                </Container>
            </div>
        )
    }
}
export default Board