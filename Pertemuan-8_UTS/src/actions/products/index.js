import { API_CART_URL } from "../../api";

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export const actStoreProductToCart = (product) => {
    return async (dispatch) => {
        await fetch(`${API_CART_URL}/cart/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(() => {
            dispatch(AddCart(product));
        }).catch(err => {
            console.log(err)
        })
    }
}

export const actFetchCartNumber = () => {
    return async (dispatch) => {
        await fetch(`${API_CART_URL}/cart/`)
            .then(res => res.json())
            .then(res => {
                dispatch(GetNumberCart(res));
            })
    }
}

export function GetNumberCart(payload) {
    return {
        type: 'GET_NUMBER_CART',
        payload
    }
}

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}
export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}
export function DeleteCart() {
    return {
        type: 'DELETE_CART'
    }
}

export function IncreaseQuantity() {
    return {
        type: 'INCREASE_QUANTITY'
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}