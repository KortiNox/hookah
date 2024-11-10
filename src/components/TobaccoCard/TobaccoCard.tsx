import styles from './TobaccoCard.module.css';
import { TobaccoCartProps } from './TobaccoCard.props';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function TobaccoCard(props: TobaccoCartProps) {
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };
  return (
    <Link to={`/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles['price']}>{props.price}</div>
          <button className={styles['add-to-card']} onClick={add}>
            <img src="/cart-button-icon.svg" alt="Добавить" className={styles['icon']}></img>
          </button>
        </div>
        <div className={styles['footer']}>
          <div className={styles['name']}>{props.name}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default TobaccoCard;
