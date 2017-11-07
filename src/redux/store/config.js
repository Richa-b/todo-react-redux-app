import {applyMiddleware, compose, createStore} from "redux";
import combineReducer from "../reducers/index";

const store = createStore(combineReducer, {}, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store