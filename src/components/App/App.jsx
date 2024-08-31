import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { selectContactsExist } from '../../redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const contactsExist = useSelector(selectContactsExist);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>

      <div className={css.card}>
        <ContactForm />
      </div>

      {contactsExist ? (
        <>
          <div className={css.card}>
            <SearchBox />
          </div>

          <div className={css.list}>
            <ContactList />
          </div>
        </>
      ) : (
        <div className={css.card}>There are no contacts</div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
