
import React from 'react';

interface ProductProps {
  id: string;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  const handleAddToCart = () => {
    console.log(`Adding product ${name} (ID: ${id}) to cart.`);
    // Basic placeholder for add to cart logic
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
