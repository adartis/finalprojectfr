import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already in cart
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(i => i.name === name);

      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity of specific item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
