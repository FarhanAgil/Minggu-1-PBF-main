import { combineReducers } from 'redux'
import { GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../../actions/products'

const initProduct = {
    numberCart: 0,
    Carts: []
}

function todoProduct(state = initProduct, action) {
    switch (action.type) {
        case GET_NUMBER_CART:
            // let storedNumberCart = new Set(action.payload.map(x => x.productId)).size
            let storedNumberCart = action.payload.length
            return {
                ...state,
                numberCart: state.numberCart + storedNumberCart
            }
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    image: action.payload.image,
                    nama: action.payload.nama,
                    harga: action.payload.harga,
                    qty: 1
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        state.Carts[key].qty++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        image: action.payload.image,
                        nama: action.payload.nama,
                        harga: action.payload.harga,
                        qty: 1
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            state.numberCart--;

            return {
                ...state
            }
        case DELETE_CART:
            let qty_ = state.Carts[action.payload].qty;
            return {
                ...state,
                numberCart: state.numberCart - qty_,
                Carts: state.Carts.filter(item => {
                    return item.id != state.Carts[action.payload].id
                })

            }
        default:
            return state;
    }
}

const SamStoreApp = combineReducers({
    _todoProduct: todoProduct
})

export default SamStoreApp

