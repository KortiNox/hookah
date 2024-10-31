import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

export function Product() {
  const data = useLoaderData() as Product;
  const product = data[0];

  return <>Product - {product.name}</>;
}
