import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const result = await api.register(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.login(data);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      const result = await api.logout(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current-user',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const result = await api.getCurrentUser(auth.token);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      if (!auth.token) return false;
    },
  }
);
