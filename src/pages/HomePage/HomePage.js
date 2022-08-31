import s from './HomePage.module.css';
import phonebook from '../../assets/img/phonebook.png';
const HomePage = () => {
  return (
    <main>
      <p className={s.title}>
        Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!
      </p>
      <img src={phonebook} width="300" alt="phonebook" className={s.img} />
    </main>
  );
};

export default HomePage;
