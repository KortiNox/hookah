import { TobaccoListProps } from './TobaccoList.props';
import styles from './TobaccoList.module.css';
import TobaccoCard from '../../../components/TobaccoCard/TobaccoCard';

export function TobaccoList({ products }: TobaccoListProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {products.map((p) => (
        <TobaccoCard
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description.join(', ')}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
}
