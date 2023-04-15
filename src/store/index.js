import {createStore, combineReducers, applyMiddleware} from "redux";
import {postalReducer} from './postalReducer';
import {universitiesReducer} from './universitiesReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';



const rootReducer = combineReducers ({
    postal: postalReducer,
    universities: universitiesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))