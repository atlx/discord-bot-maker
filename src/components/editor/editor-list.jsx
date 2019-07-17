import React, { Component } from "react";
import "../../styles/editor-list.css";

export default class EditorList extends Component {
    render() {
        return (
            <div className="editor-list">
                {this.props.children}
            </div>
        );
    }
}
