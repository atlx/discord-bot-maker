import React, { Component } from "react";
import Toolbar from "../toolbar";
import "../../styles/behaviour-editor.css";
import EditorSection from "../editor/editor-section";
import EditorList from "../editor/editor-list";
import EditorListItem from "../editor/editor-list-item";
import StatusBar from "../status-bar/status-bar";
import StatusInfo from "../status-bar/status-info";
import BehaviourBehaviour from "../../models/behaviour-behaviour";
import BehaviourCondition from "../../models/behaviour-condition";
import BehaviourAction from "../../models/behaviour-action";

export default class BehaviourEditor extends Component {
    constructor(props) {
        super(props);

        // Bindings
        this.getActions = this.getActions.bind(this);
        this.getConditions = this.getConditions.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }

    componentWillMount() {
        const testBehaviours = BehaviourEditor.getTestBehaviours();

        this.setState({
            behaviours: testBehaviours,
            activeBehaviour: testBehaviours[0]
        });
    }

    getConditions() {
        return this.state.activeBehaviour.conditions.map((condition) => {
            return <EditorListItem name={condition.name} />
        });
    }

    getEvents() {
        return this.state.activeBehaviour.events.map((event) => {
            return <EditorListItem name={event.name} />
        });
    }

    getActions() {
        return this.state.activeBehaviour.actions.map((action) => {
            return <EditorListItem name={action.name} />
        });
    }

    render() {
        return (
            <div className="behaviour-editor">
                <Toolbar />
                <div className="content">
                    <EditorSection title="Behaviours">
                        <EditorList>
                            <EditorListItem name="Prevent mass mentions" />
                        </EditorList>
                    </EditorSection>
                    <EditorSection title="Conditions">
                        <EditorList>
                            {this.getConditions()}
                        </EditorList>
                    </EditorSection>
                    <EditorSection title="Events">
                        <EditorList>
                            {this.getEvents()}
                        </EditorList>
                    </EditorSection>
                    <EditorSection title="Actions">
                        <EditorList>
                            {this.getActions()}
                        </EditorList>
                    </EditorSection>
                </div>
                <StatusBar>
                    <StatusInfo prefix="Project" value="My Fun Bot" />
                    <StatusInfo prefix="Status" value="Idle" />
                </StatusBar>
            </div>
        );
    }

    static getTestBehaviours() {
        return [
            new BehaviourBehaviour("Welcome new users", [
                new BehaviourCondition("Message")
            ], [
                new BehaviourCondition("Message contains mentions")
            ], [
                new BehaviourAction("Respond with 'hello'")
            ])
        ];
    }
}
