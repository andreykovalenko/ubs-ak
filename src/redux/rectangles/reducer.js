import { Actions } from './actions';

export const initialState = {
    totalWidth: 0,
    all: []
};

export const handlers = {
    [Actions.Add]: (state, { rectangle }) => {
        const id = new Date().getTime();
        rectangle.id = id;
        const all = [...state.all, { ...rectangle }];
        const totalWidth = state.totalWidth + rectangle.width;

        return { all, totalWidth };
    },
    [Actions.Remove]: (state, { rectangle }) => {
        const all = [...state.all.filter(r => r.id !== rectangle.id)];;
        const totalWidth = state.totalWidth - rectangle.width;

        return { all, totalWidth };
    },
};
