import React from 'react';
import Product from './Product';

// Define a clear interface for the product data structure, consistent with Product.tsx
interface ProductData {
  id: string;
  name: string;
  price: number;
}

// Define props interface for the ProductList component
interface ProductListProps {
  products: ProductData[]; // Array of product data
  onProductAddToCart: (productId: string) => void; // Callback for adding a product to cart
}

/**
 * ProductList component displays a list of Product components.
 * It acts as a container component, managing the rendering of multiple products
 * and passing down the add-to-cart functionality.
 * Uses Tailwind CSS for styling.
 */
const ProductList: React.FC<ProductListProps> = ({ products, onProductAddToCart }) => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Available Products</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {products.length === 0 ? (
          <p className="text-gray-600">No products available at the moment.</p>
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} onAddToCart={onProductAddToCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;