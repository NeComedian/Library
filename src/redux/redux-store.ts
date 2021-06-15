import {combineReducers, createStore} from "redux";
import libraryReducer from "./library-reducer";
import {reducer as formReducer} from "redux-form"
let rootReducer = combineReducers({
    libraryPage: libraryReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export default store;
