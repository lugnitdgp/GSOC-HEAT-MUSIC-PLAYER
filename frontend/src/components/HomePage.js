import React from 'react';
import CreateRoomPage from './CreateRoomPage'
import RoomJoinPage from './RoomJoinPage'
import Room from './Room'
import {BrowserRouter as Router,
     Switch, Route, Link, Redirect } from 'react-router-dom';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <p>This is homepage</p>
                    </Route>
                    <Route path="/join" component={RoomJoinPage}></Route>
                    <Route path="/create" component={CreateRoomPage}></Route>
                    <Route path="/room/:roomCode" component={Room}></Route>
                </Switch>
            </Router>
        )
    }
}
