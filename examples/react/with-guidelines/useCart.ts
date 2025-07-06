
import { useState, useCallback } from 'react';

/**
 * Represents a single item in the shopping cart.
 */
interface CartItem {
  productId: string; // Unique identifier for the product
  name: string;
  price: number;
  quantity: number;
}

/**
 * Represents the return type of the useCart hook.
 */
interface UseCartReturn {
  cartItems: CartItem[];
  addItem: (product: { productId: string; name: string; price: number }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
}

/**
 * A custom React Hook for managing shopping cart state.
 * Provides functions to add, remove, update quantity, and clear items in the cart.
 * Adheres to React Hooks best practices by using useCallback for stable function references.
 *
 * @returns {UseCartReturn} An object containing cart items and functions to manipulate the cart.
 */
const useCart = (): UseCartReturn => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /**
   * Adds a product to the cart or increments its quantity if it already exists.
   * @param product - The product to add, including its ID, name, and price.
   */
  const addItem = useCallback(
    (product: { productId: string; name: string; price: number }) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.productId === product.productId);
        if (existingItem) {
          return prevItems.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    },
    [] // No dependencies, as setCartItems is stable
  );

  /**
   * Removes an item from the cart.
   * @param productId - The ID of the product to remove.
   */
  const removeItem = useCallback((productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  }, []);

  /**
   * Updates the quantity of a specific item in the cart.
   * Ensures quantity does not go below 1.
   * @param productId - The ID of the product to update.
   * @param newQuantity - The new quantity for the product.
   */
  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  }, []);

  /**
   * Clears all items from the cart.
   */
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
};

export default useCart;
