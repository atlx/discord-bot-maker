import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import CreateProject from "./components/create-project";
import BehaviourEditor from "./components/behaviour-editor/behaviour-editor";
import SelectProject from "./components/select-project/select-project";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/global.css";

ReactDOM.render((
        <Router>
            <div>
                <Route exact path="/editor" component={SelectProject} />
                <Route path="/editor/behaviours" component={BehaviourEditor} />
                <Route path="/editor/create" component={CreateProject} />
            </div>
        </Router>
    ), document.getElementById("root")
);

registerServiceWorker();
