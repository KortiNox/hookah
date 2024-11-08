import cn from 'classnames';
import { Outlet, NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Layout() {
  const navigate = useNavigate();
  const items = useSelector((s: RootState) => s.cart.items);

  const handleLogout = () => {
    navigate('/auth/login');
  };

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.svg" alt="avatar"></img>
          <div className={styles['name']}>Имя Пользвателя</div>
          <div className={styles['email']}>Artemkorolevv@mail.ru</div>
        </div>

        <div className={styles['menu']}>
          <NavLink
            to="/"
            className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}
          >
            <img className={styles['icon']} src="/menu-icon.svg" alt="menu-svg"></img>
            Меню
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => cn(styles['link'], { [styles.active]: isActive })}
          >
            <img className={styles['icon']} src="/cart-icon.svg" alt="cart-svg"></img>
            Корзина {items.reduce((acc, item) => (acc += item.count), 0)}
          </NavLink>
        </div>
        <Button className={styles['exit']} onClick={handleLogout}>
          <img className={styles['icon']} src="/exit-icon.svg" alt="exit-svg"></img>
          Выход
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
