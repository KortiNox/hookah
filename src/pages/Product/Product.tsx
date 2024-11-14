import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch } from '../../store/store';
import styles from './Product.module.css';

export function Product() {
  const data = useLoaderData() as Product;
  const product = data[0];

  const dispatch = useDispatch<AppDispatch>();
  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(cartActions.add(product.id));
  };

  return (
    <>
      <div className={styles['mix']}>
        <div className={styles['top']}>
          <p>Микс - {product.name}</p>
          <p>Крепость - {product.strong}</p>
          <p>Категория - {product.category}</p>
        </div>
        <div className={styles['card']}>
          <div className={styles['head']} style={{ backgroundImage: `url('${product.image}')` }}>
            <div className={styles['price']}>{product.price}</div>
            <button className={styles['add-to-card']} onClick={add}>
              <p className={styles['text-card']}>Добавить в закладки</p>
              <img
                src="/cart-button-icon.svg"
                alt="Добавить"
                title="Добавить в закладки"
                className={styles['icon']}
              ></img>
            </button>
            <div className={styles['rating']}>
              {product.rating}&nbsp;
              <img src="/star-icon.svg" alt="Рейтинг" className={styles['icon']}></img>
            </div>
          </div>

          <div className={styles['footer']}>
            <div className={styles['name']}>{product.name}: </div>
            <div className={styles['description']}>{product.description}</div>
          </div>
          <div className={styles['taste']}>
            <div></div>
            <div className={styles['flavor']}>Описание: {product.flavor}</div>
          </div>
        </div>
      </div>
    </>
  );
}
