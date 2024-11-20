import { ChangeEvent, useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
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
  const [filter, setFilter] = useState<string>();

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/items`, {
        params: { name },
      });

      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        console.log(error);
        setError(e.message);
      }

      setIsLoading(false);
      return;
    }
  };
  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className={styles['head']}>
        <Headling>Миксы</Headling>
        <Search
          className={styles['search']}
          placeholder="Введите микс"
          onChange={updateFilter}
        ></Search>
      </div>
      <div>
        {/*error && <>{'Не найдено'}</>*/}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <>Загрузка...</>}
        {!isLoading && products.length === 0 && <>Не найдено 2</>}
      </div>
    </>
  );
}

export default Menu;
