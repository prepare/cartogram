function addCameraController(controller) {
    return {
        type: 'ADD_CAMERA_CONTROLLER',
        controller
    };
}

function addActor(actor) {
    return {
        type: 'ADD_ACTOR',
        actor
    };
}

function addGroup(group) {
    return {
        type: 'ADD_GROUP',
        group
    };
}

function addGroups(groups) {
    return {
        type: 'ADD_GROUPS',
        groups
    };
}

function addActorObjects(actorObjects) {
    return {
        type: 'ADD_ACTOR_OBJECTS',
        actorObjects
    };
}

function addMeshes(meshes) {
    return {
        type: 'ADD_MESHES',
        meshes
    };
}

function commitChanges(changes) {
    return {
        type: 'COMMIT_CHANGES',
        changes
    };
}

function resetUpdates() {
    return {
        type: 'RESET_UPDATES'
    };
}

export default {
    addCameraController,
    addActor,
    addGroup,
    addGroups,
    addActorObjects,
    addMeshes,
    commitChanges,
    resetUpdates,
};
