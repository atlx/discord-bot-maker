import React, { Component } from "react";
import "../../styles/status-info.css";

export default class StatusInfo extends Component {
    render() {
        return (
            <div className="status-info">
                <div className="prefix">{this.props.prefix}</div>
                <div className="value">{this.props.value}</div>
            </div>
        );
    }
}
