import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/select-project.css";
import SelectProjectOption from "./select-project-option";
import SelectOptionModel from "../../models/select-option-model";

const DiscordPassport = require("passport-discord");

export default class SelectProject extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const options = SelectProject.getTestOptions();// this.props.options;

        // Assure all options are deselected
        for (let i = 0; i < options.length; i++) {
            options[i].selected = false;
        }

        // Select the first option by default
        options[0].selected = true;

        this.setState({
            options: options,
            selected: 0
        });
    }

    selectOption(index) {
        const updatedOptions = this.state.options;

        updatedOptions[this.state.selected].selected = false;
        updatedOptions[index].selected = true;

        this.setState({
            options: updatedOptions,
            selected: index
        });
    }

    getOptions() {
        return this.state.options.map((option, index) => {
            return <SelectProjectOption key={index} onClick={() => this.selectOption(index)} name={option.name} selected={option.selected} />
        });
    }

    render() {
        return (
            <div className="select-project">
                <div className="box">
                    <Link className="create" to="/create">Create Project</Link>
                    <div className="list">
                        {this.getOptions()}
                    </div>
                </div>
            </div>
        );
    }

    static getTestOptions() {
        return [
            new SelectOptionModel("My Fun Bot"),
            new SelectOptionModel("My Moderation Bot"),
            new SelectOptionModel("My Music Bot")
        ];
    }
}
