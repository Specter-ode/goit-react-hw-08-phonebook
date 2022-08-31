import s from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { register } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(register(data));
  };
  return (
    <main>
      <div className={s.container}>
        <h2>Register Page</h2>
        <RegisterForm onSubmitClick={onRegister} />
      </div>
    </main>
  );
};

export default RegisterPage;
