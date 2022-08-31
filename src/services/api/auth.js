import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const result = await instance.post('/users/signup', data);
  setToken(result.data.token);
  return result.data;
};

export const login = async data => {
  const result = await instance.post('/users/login', data);
  console.log('login result: ', result.data);
  setToken(result.data.token);

  return result.data;
};

export const logout = async data => {
  const result = await instance.post('/users/logout', data);
  console.log('logout result: ', result);
  return result.data;
};

export default instance;
