export const Actions = {
    Add: 'RECTANGLE_ADD',
    Remove: 'RECTANGLE_REMOVE',
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
