import React, { Component } from "react";
import "../../styles/select-project-option.css";

export default class SelectProjectOption extends Component {
    getClasses() {
        const classes = ["select-project-option"];

        if (this.props.selected) {
            classes.push("selected");
        }

        return classes.join(" ");
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={this.getClasses()}>
                {this.props.name}
            </div>
        );
    }
}