import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/auth';

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const result = await api.register(data);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    console.log('data: ', data);
    const result = await api.login(data);
    console.log('result: ', result);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
