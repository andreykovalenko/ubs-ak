import {setItem, getItem} from "./storage";
const STATE_ID = "ubs-ak.redux-state";

export function loadState() {
    return getItem(STATE_ID);
}

export function saveState(state) {
    setItem(STATE_ID, state);
}