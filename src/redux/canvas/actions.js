export const Actions = {
    SetSize: 'CANVAS_SIZE_SET',
};

export default Actions;

export function setSize(width, height) {
    return { type: Actions.SetSize, width, height };
}
