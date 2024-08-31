import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;
export const selectContactsExist = createSelector([selectContacts], contacts => contacts.length > 0);
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name))
);

export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsAdding = state => state.contacts.isAdding;
export const selectIsDeleting = state => state.contacts.isDeleting;
export const selectError = state => state.contacts.error;
