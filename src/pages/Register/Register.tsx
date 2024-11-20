import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export function Register() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/auth/login');
  };

  return (
    <div className={styles.container}>
      <h1>Регистрация временно приостановлена</h1>
      <Button className={styles['reg-btn']} onClick={handleLogout}>
        Вернуться
      </Button>
    </div>
  );
}
