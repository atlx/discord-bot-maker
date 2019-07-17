import React, { Component } from "react";
import "../styles/create-project.css";
import { Link } from "react-router-dom";

export default class CreateProject extends Component {
    render() {
        return (
            <div className="create-project">
                <div className="box">
                    <div className="label">Project Name</div>
                    <input autoFocus type="text" className="field" placeholder="My Fun Bot" />
                    <div className="label">Description</div>
                    <input type="text" className="field" placeholder="Does fun stuff" />
                    <div className="label">
                        Bot Token
                        <div onClick={CreateProject.findBotToken} className="link-tag blue">Find it here</div>
                    </div>
                    <input type="password" spellCheck="false" className="field" placeholder="--" />
                    <div className="label">Command Prefix</div>
                    <input type="text" spellCheck="false" className="field" placeholder="!" />
                    <Link to="/behaviours" className="finish">Finish</Link>
                </div>
            </div>
        );
    }

    static findBotToken() {
        window.open("https://discordapp.com/developers/applications/me", "_blank");
    }
}
