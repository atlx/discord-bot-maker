export default class BehaviourBehaviour {
    constructor(name, events = [], conditions = [], actions = []) {
        this.name = name;
        this.events = events;
        this.conditions = conditions;
        this.actions = actions;
    }
}
