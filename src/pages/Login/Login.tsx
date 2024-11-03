import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import { Input } from '../../components/Input/Inpit';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  const [error, setError] = useState<string | null>();
  const [isFormFilled, setIsFormFilled] = useState<undefined | boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = () => {
    //
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    setIsFormFilled(emailInput.trim() !== '' && passwordInput.trim() !== '');
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    await sendLogin(email.value, password.value);

    if (!isFormFilled) {
      return;
    }
    if (isFormFilled) {
      return console.log('authError');
    }
  };

  const sendLogin = async (email: string, password: string) => {
    if (!isFormFilled) {
      navigate('/');
      return;
    }
    try {
      const { data } = await axios.post(`${PREFIX}/users`, {
        email,
        password,
      });
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        navigate('/');
        console.log(e);
        console.log(error);
        setError(e.response?.data?.message);
      }
    }
  };

  return (
    <div className={styles['login']}>
      <Headling>Вход</Headling>
      {isFormFilled && <div className={styles['error']}>{'Авторизация временно недоступна'}</div>}
      <form className={styles['form']} onSubmit={submit}>
        <div className={styles['field']}>
          <label htmlFor="email">Ваш Email</label>
          <Input id="email" name="email" placeholder="Email" onChange={handleInputChange}></Input>
        </div>
        <div className={styles['field']}>
          <label htmlFor="password">Пароль</label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleInputChange}
          ></Input>
        </div>
        <Button appearence="big">{isFormFilled ? 'Войти' : 'Вход без авторизации'}</Button>
      </form>
      <div className={styles['links']}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}
