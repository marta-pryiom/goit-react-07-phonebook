import s from './ContactList.module.css';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContact } from '../../redux/selectors';
import { useEffect } from 'react';

function ContactList() {
    const contacts = useSelector(getVisibleContact);
    console.log(contacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <ul className={s.ContactList}>
            {contacts.map(({ name, number, phone, id }) => (
                <li key={id} id={s.ContactItem}>
                    <p className={s.Text}>{name}</p>
                    <p className={s.Text}>{number || phone}</p>
                    <button
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
