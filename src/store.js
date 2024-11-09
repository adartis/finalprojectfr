// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the cartReducer from the CartSlice file to manage the cart slice of the state
import cartReducer from './CartSlice';

// Configure the store with the cartReducer assigned to manage the cart slice
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Export the configured store so it can be used throughout the application
export default store;
