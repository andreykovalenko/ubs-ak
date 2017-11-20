import { Actions } from './actions';
import { persistRectangle, removeRectangle, getRectangles } from './persistance';

export const initialState = {
    totalWidth: 0,
    all: []
};

export const handlers = {
    [Actions.Add]: (state, { rectangle }) => {
        const id = new Date().getTime();
        rectangle.id = id;
        persistRectangle(rectangle);
        const all = [...state.all, { ...rectangle }];
        const totalWidth = state.totalWidth + rectangle.width;

        return { all, totalWidth };
    },
    [Actions.GetAll]: (state) => {
        const all = getRectangles();
        const totalWidth = all.reduce((width, rectangle) => width + rectangle.width, 0);
        
        return { all, totalWidth };

    },
    [Actions.Remove]: (state, { rectangle }) => {
        removeRectangle(rectangle.id);
        const all = [...state.all.filter(r => r.id !== rectangle.id)];;
        const totalWidth = state.totalWidth - rectangle.width;

        return { all, totalWidth };
    },
};
