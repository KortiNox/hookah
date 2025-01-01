import { useLoaderData } from 'react-router-dom';
import { TobaccoInterface } from '../../interfaces/tobacco.interface';
import styles from './TobaccoBigCard.module.css';

export function TobaccoBigCard() {
  const data = useLoaderData() as TobaccoInterface;
  const weed = data[0];

  return (
    <>
      <div className={styles['mix']}>
        <div className={styles['top']}>
          <p>Вкус - {weed.name}</p>
          <p>Лист - {weed.strong}</p>
          <p>Категория - {weed.category}</p>
          <p>Цена забивки (20гр) - {weed.price} руб</p>
        </div>
        <div className={styles['card']}>
          <div className={styles['head']} style={{ backgroundImage: `url('../${weed.image}')` }}>
            <div className={styles['price']}>{weed.price}</div>

            <div className={styles['rating']}>
              {weed.rating}&nbsp;
              <img src="../star-icon.svg" alt="Рейтинг" className={styles['icon']} />
            </div>
          </div>

          <div className={styles['footer']}>
            <div className={styles['name']}>{weed.name}: </div>
            <div className={styles['description']}>{weed.description}</div>
          </div>
          <div className={styles['taste']}>
            <div></div>
            <div className={styles['flavor']}>Описание: {weed.flavor}</div>
          </div>
        </div>
      </div>
    </>
  );
}
