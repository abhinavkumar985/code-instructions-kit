
import React from 'react';
import Product from './Product';

interface ProductData {
  id: string;
  name: string;
  price: number;
}

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
