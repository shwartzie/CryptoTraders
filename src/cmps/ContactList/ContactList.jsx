import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactListPreview } from './ContactListPreview'
import { setFilterBy, loadContacts, removeContact } from '../../store/actions/contactActions'
import { ContactsFilter } from '../ContactFilter/ContactsFilter'
import { useNavigate } from "react-router-dom"
import { ContactPreviewDetails } from './ContactPreviewDetails.jsx'
export const ContactList = (props) => {
    const contacts = useSelector(state => state.contactModule.contacts)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let [contact, setPreview] = useState(null)

    useEffect(() => {
        dispatch(loadContacts())

    }, [])

    const onChangeFilter = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }, [])

    const onRemoveContact = async (contactId, ev) => {
        ev.stopPropagation()
        await dispatch(removeContact(contactId))

    }

    const onAddContact = () => {
        navigate(`/contact/edit/`)
    }

    const contactPreview = (contact) => {
        setPreview(contact)
    }


    return (
        <div>
            <div className='contact-list-header-actions'>
                <ContactsFilter onChangeFilter={onChangeFilter} />
                <button onClick={onAddContact}> Add Contact </button>
            </div>
            <main className='contact-list-layout'>
                <div className='contact-list-container'>
                    <>
                        {contacts?.map(contact =>
                            <ContactListPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} contactPreview={contactPreview} />
                        )}
                    </>
                </div>
                {contact && <article className='contact-modal-preview'>
                    <ContactPreviewDetails contact={contact}/>
                </article>}
            </main>
        </div>
    )

}



