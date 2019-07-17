import React, { Component } from "react";
import "../styles/toolbar.css";

export default class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="section">
                    <i title="Run Project" className="fa fa-play" />
                    <i title="Save Changes" className="fa fa-save disabled" />
                    <i title="Undo" className="fa fa-undo disabled" />
                    <i title="Redo" className="fa fa-redo disabled" />
                    <i title="Commands" className="fa fa-book" />
                    <i title="Assets" className="fa fa-box" />
                    <i title="Variables" className="fa fa-asterisk" />
                    <i title="Plugins" className="fa fa-store" />
                    <i title="Invite Bot" className="fa fa-plug" />
                    <i title="Download Project" className="fa fa-download" />
                    <i title="Project Settings" className="fa fa-cog" />
                </div>
                <div className="section">
                    <i id="toolbar-link-github" title="Github Page" className="fab fa-github-alt" />
                    <i onClick={Toolbar.visitDiscord} title="Official Discord" className="fab fa-discord" />
                    <i title="Feedback" className="fa fa-grin" />
                </div>
            </div>
        );
    }

    static visitDiscord() {
        window.open("https://discord.gg/kmFDMwT", "_blank");
    }
}
