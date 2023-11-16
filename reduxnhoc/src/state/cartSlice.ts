import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const item:CartItem = action.payload;
            console.log(item);
            const existingItem = state.items.find((d) => d.id === item.id);
            if(existingItem) {
                existingItem.quantity++;
            } else {
                console.log("New Item");
                state.items = [...state.items, item];
            }
        }
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;