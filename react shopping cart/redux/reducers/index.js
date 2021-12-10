import { combineReducers } from "redux";
import { productReducer} from "./productReducer";
import {selectedProductReducer} from "../reducers/productReducer"
import { setProducts } from "../actions/productActions";

const reducers= combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
 

});
export default reducers;