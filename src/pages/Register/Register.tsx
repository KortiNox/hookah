import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/auth/login');
  };

  return (
    <>
      Регистрация временно приостановлена
      <Button onClick={handleLogout}>Вернуться</Button>
    </>
  );
}
