export const Actions = {
    Add: 'RECTANGLE_ADD',
    Remove: 'RECTANGLE_REMOVE',
    GetAll: 'RECTANGLE_GET_ALL',
};

export default Actions;

export function add(rectangle) {
    return {
        type: Actions.Add,
        rectangle
    };
}

export function remove(rectangle) {
    return { type: Actions.Remove, rectangle };
}

export function getAll() {
    return {
        type: Actions.GetAll,
    };
}