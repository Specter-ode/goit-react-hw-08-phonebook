import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

export const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

function Navigation() {
  //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={getLinkClassName}>
        Home
      </NavLink>

      <NavLink to="/contacts" className={getLinkClassName}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
