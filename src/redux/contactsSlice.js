import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, {payload}) {
        if (state.find(contact => contact.name === payload.name)) {
          toast.error('Contact already exists!');
          return;
        }
        state.push(payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number, created_at: Date.now() } };
      },
    },
    deleteContact: (state, {payload}) => state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
