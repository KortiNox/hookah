import { ChangeEvent, useEffect, useState } from 'react';

import { Search } from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { TobaccoInterface } from '../../interfaces/tobacco.interface';
import styles from './Tobacco.module.css';
import axios, { AxiosError } from 'axios';

import { TobaccoList } from './TobaccoList/TobaccoList';

export function Tobacco() {
  const [products, setProducts] = useState<TobaccoInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<TobaccoInterface[]>(`${PREFIX}/Tobacco`, {
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    alert(category);
  };

  const filteredProducts = products.filter((product) => {
    return selectedCategory === 'all' || product.categoryID === selectedCategory;
  });
  return (
    <>
      <div className={styles['head']}>
        <Search placeholder="Поиск табака" onChange={updateFilter}></Search>
      </div>
      <div>
        {/*error && <>{'Не найдено'}</>*/}
        {!isLoading && products.length > 0 && <TobaccoList Tobacco={filteredProducts} />}
        {isLoading && <>Загрузка...</>}
        {!isLoading && products.length === 0 && <>Не найдено 2</>}
      </div>
    </>
  );
}

export default Tobacco;
//
//
//
//
//
