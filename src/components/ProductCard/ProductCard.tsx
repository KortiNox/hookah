import styles from './ProductCard.module.css';
import { ProductCartProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { RootState } from '../../store/store';

function ProductCard(props: ProductCartProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isAdded, setIsAdded] = useState(cartItems.some((item) => item.id === props.id));

  const add = (e: MouseEvent) => {
    e.preventDefault();
    if (!isAdded) {
      dispatch(cartActions.add(props.id));
      setIsAdded(true);
    }
  };

  return (
    <Link to={`/hookah/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles['price']}>{props.price}</div>
          <button
            className={`${styles['add-to-card']} ${isAdded ? styles['added'] : ''}`}
            onClick={add}
          >
            {isAdded ? 'Добавлено в закладки' : <div className={styles['plus']}>+</div>}
          </button>
          <div className={styles['rating']}>
            {props.rating}&nbsp;
            <img src="star-icon.svg" alt="Рейтинг" className={styles['icon']} />
          </div>
        </div>

        <div className={styles['footer']}>
          <div className={styles['name']}>{props.name}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
