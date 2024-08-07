import { createContext, useEffect, useState } from "react";
// Import food and market lists from assets
import { food_list, market_list } from '../assets/assets/assets';

// Create a context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // Initialize cartItems state as an empty object
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        // If the item is not already in the cart, add it with a quantity of 1
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            // If the item is already in the cart, increase its quantity by 1
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        // Decrease the quantity of the item by 1
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Use useEffect to log the cart items whenever they change
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Define the context value to be provided
    const ContextValue = {
        food_list,
        market_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        // Provide the context value to children components
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;