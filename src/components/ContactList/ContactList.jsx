import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

export default function ContactList() {
  const dispatcher = useDispatch();

  const contacts = useSelector(selectContacts) || [];
  const filterValue = useSelector(selectFilter) || '';

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

  console.log({ filteredContacts });

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}
