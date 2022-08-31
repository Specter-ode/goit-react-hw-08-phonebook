// import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import { authSelectors } from '../../redux/auth';
import s from './Header.module.css';

const Header = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={s.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default Header;
