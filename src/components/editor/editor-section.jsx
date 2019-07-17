import React, { Component } from "react";
import "../../styles/editor-section.css";

export default class EditorSection extends Component {
    render() {
        return (
            <div className="editor-section">
                <div className="header">
                    <div className="title">{this.props.title}</div>
                    <button className="create"><i className="fa fa-plus-circle" /> Create</button>
                </div>
                {this.props.children}
            </div>
        );
    }
}
