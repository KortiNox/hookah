import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem(props: CartItemProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decriase = () => {};
  const remove = () => {};

  return (
    <div className={styles['item']}>
      <div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
      <div className={styles['descriptionStyle']}>
        <div className={styles['name']}>{props.name}</div>
        <div className={styles['price']}>{props.price}</div>
      </div>
      <div className={styles['action']}>
        <button className={styles['button']} onClick={decriase}>
          <img src="/cart-button-icon.svg" alt="Удалить" className={styles['icon']}></img>
        </button>
        <button className={styles['add-to-card']} onClick={increase}>
          <img src="/cart-button-icon.svg" alt="Добавить" className={styles['icon']}></img>
        </button>
        <button className={styles['add-to-card']} onClick={remove}>
          <img src="/cart-button-icon.svg" alt="Удалить все" className={styles['icon']}></img>
        </button>
      </div>

      <div className={styles['rating']}>
        <img src="/star-icon.svg" alt="Рейтинг" className={styles['icon']}></img>
      </div>
    </div>
  );
}

export default CartItem;
