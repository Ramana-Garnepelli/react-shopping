import { ActionTypes } from "../constants/action-types"
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};
export const selectedproduct=(product)=>{
    return {
        type:ActionTypes. SELECTED_PRODUCT,
        payload:product,
    };
};
export const removeSelectedproduct=(product)=>{
    return {
        type:ActionTypes. REMOVE_SELECTED_PRODUCT,
     
    };
};