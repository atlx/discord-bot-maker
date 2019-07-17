import React, { Component } from "react";
import "../../styles/editor-list-item.css";

export default class EditorListItem extends Component {
    render() {
        return (
            <div className="editor-list-item">
                <div className="name">{this.props.name}</div>
                <div className="actions">
                    <i title="Move" className="fa fa-arrows-alt" />
                    <i title="Edit" className="fa fa-pen" />
                    <i title="Delete" className="fa fa-trash" />
                </div>
            </div>
        );
    }
}
