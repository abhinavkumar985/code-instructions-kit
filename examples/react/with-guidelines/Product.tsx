import React from 'react';

// Define a clear interface for the product data structure
interface Product {
  id: string;
  name: string;
  price: number;
}

// Define props interface for the Product component
interface ProductProps {
  product: Product; // Component receives a product object
  onAddToCart: (productId: string) => void; // Callback for adding to cart
}

/**
 * Product component displays individual product details and an add-to-cart button.
 * Adheres to Single Responsibility Principle: focuses solely on displaying a product.
 * Uses Tailwind CSS for styling.
 */
const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  const { id, name, price } = product;

  // Use a descriptive handler for the button click
  const handleAddToCartClick = () => {
    onAddToCart(id);
  };

  return (
    <div
      className="border border-gray-200 rounded-lg p-4 m-3 w-52 shadow-md flex flex-col justify-between"
    >
      <h3 className="mb-2 text-lg font-semibold">{name}</h3>
      <p className="mb-4 text-gray-700">Price: ${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCartClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;