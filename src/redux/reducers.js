import { combineReducers } from "redux";
import * as rectangles from "./rectangles/reducer";
import * as canvas from "./canvas/reducer";

const reducers = combineReducers({
    rectangles: buildReducer(rectangles),
    canvas: buildReducer(canvas)
});
export default reducers;

function buildReducer(config) {
  return (state = config.initialState, action) => {
    const actionHandler = config.handlers[action.type] || identity;
    return actionHandler(state, action);
  }
}

function identity(state) {
    return state;
}