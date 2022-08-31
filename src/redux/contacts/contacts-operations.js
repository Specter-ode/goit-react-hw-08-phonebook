import * as api from '../../services/api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {
  try {
    const result = await api.getContacts();
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addNewContact(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isDublicate = contacts.items.find(item => item.name.toLowerCase() === data.name.toLowerCase());
      if (isDublicate) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk('contacts/remove', async (id, thunkAPI) => {
  try {
    const result = await api.deleteContact(id);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
