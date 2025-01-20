import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cartItems.push({ ...item, quantity: item.quantity || 1 });
            }
            state.totalQuantity += item.quantity || 1;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const itemToRemove = state.cartItems.find((item) => item.id === id);
            if (itemToRemove) {
                state.totalQuantity -= itemToRemove.quantity;
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);

            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex];        

                if (quantity <= 0) {

                    state.totalQuantity -= item.quantity;
                    state.cartItems.splice(itemIndex, 1);
                } else {

                    state.totalQuantity += quantity - item.quantity;
                    item.quantity = quantity;
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;