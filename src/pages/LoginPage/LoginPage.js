import s from './LoginPage.module.css';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selector';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';
const LoginPage = () => {
  const isAuth = useSelector(isLogin);
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
    if (isAuth) {
      return <Navigate to="/contacts" />;
    }
  };

  return (
    <main>
      <div className={s.container}>
        <h3>
          You are on the right way. To access to the phonebook you need to sign
          in
        </h3>
        <LoginForm onSubmitClick={onLogin} />
      </div>
    </main>
  );
};

export default LoginPage;