import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66d34425184dce1713cfc2db.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, ThunkAPI) => {
  try {
    return (await axios.get('/contacts')).data;
  } catch {
    return ThunkAPI.rejectWithValue('Error fetching contacts');
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, ThunkAPI) => {
  try {
    return (await axios.post('/contacts', contact)).data;
  } catch {
    return ThunkAPI.rejectWithValue('Error adding contact');
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, ThunkAPI) => {
  try {
    await axios.delete('contacts/' + id);
    return id;
  } catch {
    return ThunkAPI.rejectWithValue('Error deleting contact');
  }
});
