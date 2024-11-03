import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

export function AuthLayout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['logo']}>
        <img className={styles['loginImage']} src="/login.svg" alt="Логотип" />
        <div>
          <h1 className={styles['transparent-text']}>HookahMix </h1>
          <br />
          <span className={styles['text']}>
            Миксы табака <br /> для кальянных
          </span>
        </div>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}
