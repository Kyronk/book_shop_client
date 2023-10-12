// rxsli

import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // let item = action.payload;
        

            let find = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(find >= 0){
                state.cartItems[find].quantityItem += 1;
                //state.cartItems[find].price += item.price;
            } else {
                state.cartItems.push(action.payload);
            }

    
        },

        getCartTotal: (state, action) => {
            let {totalQuantity, totalPrice} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    
                    const {price, quantityItem} = cartItem;
                    const itemTotal = price * quantityItem;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantityItem;
                    return cartTotal;
                }, {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )

            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        

        // làm lại cái xoá

        deleteItem: (state, action) => {
            // const id = action.payload;
            // const existingItem = state.cartItems.find(item => item.id === id);

            // if(existingItem) {
            //     state.cartItems = state.cartItems.filter(item => item.id !== id);
            //     state.totalQuantity = state.totalQuantity - existingItem.quantity
            // }

            // state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            //
            // const test = action.payload
            // console.log(test)
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
    }
});

export const cartAction = cartSlice.actions

export default cartSlice.reducer;