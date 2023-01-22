import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as authReducer } from "../Redux/Auth/Auth.Reducer";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/Cart.Reducer";
import { productReducer } from "./Products/Products.Reducer";


export const rootReducer=combineReducers({
    productsManager:productReducer,

    // cartManager: CartReducer

    cartsManager:CartReducer

})

const root_reducer = combineReducers({
  productsManager:productReducer,
  auth: authReducer,

});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);










