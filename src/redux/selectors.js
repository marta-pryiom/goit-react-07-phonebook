// import { createSelector } from 'reselect';
import { createSelector } from '@reduxjs/toolkit';

export const filterValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContact = createSelector(
    [filterValue, getContacts],
    (filter, items) => {
        let normalizedFilter = filter.toLowerCase();
        return items.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    },
);
