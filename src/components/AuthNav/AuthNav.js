import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};
const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={getLinkClassName}>
        Register
      </NavLink>
      <NavLink to="/login" className={getLinkClassName}>
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthNav;
