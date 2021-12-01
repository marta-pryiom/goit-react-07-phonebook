import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61960f1e902243001762fa15.mockapi.io';
export const fetchContacts = createAsyncThunk(
    'fetchContact',
    async (__, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const submit = createAsyncThunk(
    'addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
/*використовую Thunk */
export const deleteContact = createAsyncThunk(
    'deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const {
                data: { id },
            } = await axios.delete(`/contacts/${contactId}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
