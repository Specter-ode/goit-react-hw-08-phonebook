// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://630b5943f280658a59da0079.mockapi.io/api/phonebook',
// });
import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const addNewContact = async newData => {
  console.log('newData: ', newData);
  const { data } = await instance.post('/contacts', newData);
  return data;
};

export const updateContact = async (id, newData) => {
  console.log('id: ', id);
  console.log('newData: ', newData);
  const { data } = await instance.patch(`/contacts/${id}`, newData);
  return data;
};
