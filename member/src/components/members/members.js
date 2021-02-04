import React, { Component } from "react";
import './members.css';

class Members extends Component {
    constructor() {
        super();

        this.state = {
            members: []
        }
    }

    render() {
        return (
            <div>
                <h1>Members</h1>
            </div>
        );
    }
}

export default Members;
