import s from './Filter.module.css';
import { filteredContacts } from '../../redux/contacts/actions';
import { filterValue } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

function Filter() {
    const value = useSelector(filterValue);
    const dispatch = useDispatch();
    const onChange = e => {
        dispatch(filteredContacts(e.currentTarget.value));
    };
    return (
        <div className={s.Filter}>
            <label className={s.FilterTitle}>
                Find contacts by name
                <input
                    className={s.Input}
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default Filter;
