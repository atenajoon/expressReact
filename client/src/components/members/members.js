import React, { Component } from "react";
import './members.css';

class Members extends Component {
    constructor() {
        super();

        this.state = {
            members: []
        }
    }

    componentDidMount() {
        fetch('/api/members')
            .then(res => res.json())
            .then(members => this.setState({ members }, () => console.log("members fetched...", members)));
    }

    render() {
        return (
            <div>
                <h1>Members</h1>
                <ul>
                    {this.state.members.map(member =>
                        <li key={member.id}>{member.username}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Members;
