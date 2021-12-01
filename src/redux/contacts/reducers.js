import { createReducer } from '@reduxjs/toolkit';

import { filteredContacts, contactError } from './actions';
import { fetchContacts, submit, deleteContact } from './operations';

export const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [submit.fulfilled]: (state, { payload }) => {
        return [payload, ...state];
    },
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});
export const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [submit.rejected]: (_state, { payload }) => payload,
    [deleteContact.rejected]: (_state, { payload }) => payload,
});
export const loading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [submit.pending]: () => true,
    [submit.fulfilled]: () => false,
    [submit.rejected]: () => false,
});
export const filter = createReducer('', {
    [filteredContacts]: (_, { payload }) => payload,
});
