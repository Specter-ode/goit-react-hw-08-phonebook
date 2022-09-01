import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const isToken = useSelector(getToken);
  if (isToken) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
