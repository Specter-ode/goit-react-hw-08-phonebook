import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const isToken = useSelector(getToken);
  if (!isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
