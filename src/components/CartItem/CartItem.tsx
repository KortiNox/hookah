import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { useNavigate } from 'react-router-dom';

function CartItem(props: CartItemProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const remove = () => {
    dispatch(cartActions.remove(props.id));
  };

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${props.id}`); // маршрут для продукта
  };

  return (
    <div className={styles['item']}>
      <div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
      <div className={styles['descriptionStyle']}>
        <div className={styles['name']}>{props.name}</div>
        <div className={styles['price']}>{props.price}</div>
      </div>
      <div className={styles['actions']}>
        <button className={styles['remove']} onClick={remove}>
          Удалить
        </button>
        <button className={styles['remove']} onClick={handleDetailsClick}>
          Подробнее
        </button>
      </div>

      <div className={styles['rating']}>
        <img src="/star-icon.svg" alt="Рейтинг" className={styles['icon']}></img>
      </div>
    </div>
  );
}

export default CartItem;
