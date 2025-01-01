import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch } from '../../store/store';
import { RootState } from '../../store/store'; // RootState для использования useSelector
import styles from './Product.module.css';

export function Product() {
  const data = useLoaderData() as Product;
  const product = data[0];

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Получаем элементы корзины

  // Проверяем, находится ли товар в корзине
  const isInCart = cartItems.some((item) => item.id === product.id);

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isInCart) {
      dispatch(cartActions.add(product.id));
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles['mix']}>
        <div className={styles['top']}>
          <p>Микс - {product.name}</p>
          <p>Крепость - {product.strong}</p>
          <p>Категория - {product.category}</p>
          <p>Цена забивки (20гр) - {product.price} руб</p>
        </div>
        <div className={styles['card']}>
          <div className={styles['head']} style={{ backgroundImage: `url('../${product.image}')` }}>
            <div className={styles['price']}>{product.price}</div>
            <button
              className={`${styles['add-to-card']} ${isInCart ? styles['added'] : ''}`} // Применяем класс disabled
              onClick={add}
              disabled={isInCart} // Устанавливаем атрибут disabled
            >
              <p className={styles['text-card']}>
                {isInCart ? 'Добавлено в закладки' : 'Добавить в закладки'}
              </p>
            </button>
            <div className={styles['rating']}>
              {product.rating}&nbsp;
              <img src="../star-icon.svg" alt="Рейтинг" className={styles['icon']} />
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
