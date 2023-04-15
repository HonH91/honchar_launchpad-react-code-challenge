import {createStore, combineReducers} from "redux";
import {postalReducer} from './postalReducer';
import {universitiesReducer} from './universitiesReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers ({
    postal: postalReducer,
    universities: universitiesReducer
})

export const store = createStore(rootReducer)