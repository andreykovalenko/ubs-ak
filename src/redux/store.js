import { createStore } from "redux";
import reducers from "./reducers";
import { loadState, saveState } from "./state-persistence";

let store = createStore(reducers, loadState());
store.subscribe(() => saveState(store.getState()));

export default store;