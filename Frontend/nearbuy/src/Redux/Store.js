import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Products/Products.Reducer";

export const rootReducer=combineReducers({
    productsManager:productReducer
})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));