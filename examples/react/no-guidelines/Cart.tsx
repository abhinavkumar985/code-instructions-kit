
import React from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id: string) => {
    console.log(`Removing item with ID: ${id}`);
    // Basic placeholder for remove item logic
  };

  return (
    <div style={{ border: '1px solid #eee', padding: '15px', margin: '10px' }}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>{item.name} (x{item.quantity}) - ${item.price.toFixed(2)}</span>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
