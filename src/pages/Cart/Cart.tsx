import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';

import Headling from '../../components/Headling/Headling';
import { RootState } from '../../store/store';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import styles from './Cart.module.css';

export function Cart() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);

  const loadAllItems = async () => {
    if (items.length === 0) return;
    const res = await Promise.all(items.map((i) => getItem(i.id)));

    setCartProducts(res);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  const getItem = async (id: number) => {
    const response = await axios.get<Product[]>(`${PREFIX}/items?id=${id}`);
    const data = response.data;

    // Предполагаем, что data — это массив, и мы хотим получить первый элемент, если он существует
    if (data.length > 0) {
      console.log('Полученные данные:', data[0]); // Логируем первый элемент массива
      return data[0]; // Возвращаем первый элемент массива
    } else {
      console.warn(`Продукт с id ${id} не найден в getITEM`);
      return null; // Возвращаем null, если продукт не найден
    }
  };

  return (
    <>
      <Headling className={styles['headling']}>Избранное </Headling>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          console.warn(`Продукт с id ${i.id} не найден`);
          return;
        }
        return <CartItem key={product.id} id={i.id} {...product} />;
      })}
    </>
  );
}
