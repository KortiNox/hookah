import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Search } from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/items`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }

      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Headling>Menu</Headling>
        <Search placeholder="Введите фирму или вкус"></Search>
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Загрузка...</>}
      </div>
    </>
  );
}

export default Menu;
