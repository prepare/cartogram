import _ from 'lodash';

class Group {
    constructor(definition) {
        this.definition = definition;
        this.name = definition.name;
        this.scene = definition.scene;
        this.position = definition.position;
        this.actors = {};
        this.actorList = [];
    }

    get path() {
        return `/${ this.definition.name }`;
    }

    get bbox() {

    }

    addActor(actor) {
        this.actors[actor.name] = actor;
        this.actorList.push(actor);
    }

    removeActor(actor) {
        delete this.actors[actor.name];
        this.actorList = _.without(this.actorList, actor);
    }

    updateShapes(shapeName, properties) {
        this.actorList.forEach((actor) => {
            actor.set(shapeName, properties);
        });
    }

    translate(position) {
        this._bbox = undefined;

        this.scene.pushChange({
            type: 'group',
            group: this,
            position: {
                x: position.x + this.position.x,
                y: position.y + this.position.y,
                z: (position.z || 0) + this.position.z,
            }
        });
    }

    moveTo(position) {
        position.z = this.position.z;
        this._bbox = undefined;

        this.scene.pushChange({
            type: 'group',
            group: this,
            action: 'update',
            position: {
                x: position.x,
                y: position.y,
                z: (position.z || 0) + this.position.z,
            }
        });
    }

    rotate(angle) {}

    destroy() {
        this.scene.pushChange({
            type: 'group',
            group: this,
            action: 'destroy'
        });
    }
}

export default Group;
