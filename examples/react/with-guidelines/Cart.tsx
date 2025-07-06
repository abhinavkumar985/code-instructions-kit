import React from 'react';

// Define a clear interface for a single item within the cart
interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

// Define props interface for the Cart component
interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

/**
 * Cart component displays the items currently in the shopping cart.
 * It allows users to view items, adjust quantities, and remove items.
 * Adheres to component design principles by focusing on displaying cart state
 * and delegating actions via callbacks.
 * Uses Tailwind CSS for styling.
 */
const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  // Calculate total price using reduce for clarity and efficiency
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className="border border-gray-200 rounded-lg p-5 m-5 shadow-lg bg-gray-50"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex justify-between items-center pb-3 border-b border-dashed border-gray-200"
            >
              <div className="flex-grow">
                <span className="font-semibold">{item.name}</span>
                <span className="ml-2 text-gray-600">
                  (${item.price.toFixed(2)} each)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-200 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => onRemoveItem(item.productId)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            className="mt-5 pt-4 border-t-2 border-gray-200 text-right"
          >
            <h3 className="text-xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;