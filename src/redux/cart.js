import * as ActionTypes from './ActionTypes';

export const Cart = ( state = {
    cart: []
}, action) => {
    if (action.type === ActionTypes.UPDATE_CART) {
        let find = state.cart.find(cartItem => cartItem.id === action.itemId);
        if (find) {
            const newQuantity = find.quantity + action.quantity;
            const update = state.cart.map(cartItem => 
                cartItem.id === action.itemId ? {...cartItem, quantity: newQuantity} 
                : cartItem);
            return {...state, cart: update}
        } else {
            const newCartItem = {
                id: action.itemId,
                quantity: action.quantity
            };
            return {...state, cart: this.state.cart.concat(newCartItem)}
        }
    } else {
        return state;
    }
};