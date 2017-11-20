import { Actions } from './actions';

export const initialState = {
    width: 0,
    height: 0
};

export const handlers = {
    [Actions.SetSize]: (state, { width, height }) => {
        return { width, height};
    },
};