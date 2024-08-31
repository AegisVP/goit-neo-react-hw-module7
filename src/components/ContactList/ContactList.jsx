import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContactsExist, selectFilteredContacts, selectIsLoading } from '../../redux/selectors';

export default function ContactList() {
  const contactsExist = useSelector(selectContactsExist);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {isLoading && <p>Loading contacts...</p>}

      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        !isLoading && (
          contactsExist ?
            <div className={css.card}>No contacts found</div> :
            <div className={css.card}>There are no contacts</div>
        )
      )}
    </div>
  );
}
