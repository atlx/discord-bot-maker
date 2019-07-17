import React, { Component } from "react";
import "../styles/user-watermark.css";

export default class UserWatermark extends Component {
    render() {
        return (
            <div className="user-watermark">
                Logged in as <i>John Doe</i>
            </div>
        );
    }
}
