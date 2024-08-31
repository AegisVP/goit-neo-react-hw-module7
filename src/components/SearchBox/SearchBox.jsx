import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export default function SearchBox() {
  const searchValue = useSelector(selectFilter);
  const dispatcher = useDispatch();
  const onSearch = value => dispatcher(changeFilter(value));

  return (
    <IconContext.Provider value={{ className: css.icon }}>
      <div className={css.box}>
        <label className={css.label}>
          Find contacts by name:
          <input type="text" className={css.input} onChange={e => onSearch(e.target.value)} value={searchValue} />
          <FaUser />
        </label>

        {searchValue ? (
          <button className={css.btn} onClick={() => onSearch('')}>
            Reset search
          </button>
        ) : null}
      </div>
    </IconContext.Provider>
  );
}
