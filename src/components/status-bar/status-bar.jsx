import React, { Component } from "react";
import "../../styles/status-bar.css";

export default class StatusBar extends Component {
    render() {
        return (
            <div className="status-bar">
                {this.props.children}
            </div>
        );
    }
}
