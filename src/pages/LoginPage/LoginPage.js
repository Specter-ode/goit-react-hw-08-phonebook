import s from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <main>
      <div className={s.container}>
        <h2>Login Page</h2>
        <LoginForm onSubmitClick={onLogin} />
      </div>
    </main>
  );
};

export default LoginPage;
