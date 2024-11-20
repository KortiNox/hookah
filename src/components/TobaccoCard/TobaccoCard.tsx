import styles from './TobaccoCard.module.css';
import { TobaccoCartProps } from './TobaccoCard.props';
import { Link } from 'react-router-dom';

function TobaccoCard(props: TobaccoCartProps) {
  return (
    <Link to={`/tobacco/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${props.image}')` }}></div>
        <div className={styles['footer']}>
          <div className={styles['name']}>{props.name}</div>
          <div className={styles['description']}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default TobaccoCard;
