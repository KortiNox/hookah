import styles from './ProductCard.module.css';
import { ProductCartProps } from './ProductCard.props';
import { Link } from 'react-router-dom';

function ProductCard(props: ProductCartProps) {
  return (
    <Link to={`/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles['price']}>{props.price}</div>
          <button className={styles['add-to-card']}>
            <img src="/cart-button-icon.svg" alt="Добавить" className={styles['icon']}></img>
          </button>
          <div className={styles['rating']}>
            {props.rating}&nbsp;
            <img src="/star-icon.svg" alt="Рейтинг" className={styles['icon']}></img>
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
