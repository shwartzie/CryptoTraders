import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactService } from '../../services/contactService'
import { ContactListPreview } from './ContactListPreview'
import { setFilterBy, loadContacts, removeContact } from '../../store/actions/contactActions'
import { ContactsFilter } from '../ContactFilter/ContactsFilter'

export const ContactList = (props) => {
    const contacts = useSelector(state => state.contactModule.contacts)

    const dispatch = useDispatch()
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

    return (
        <div>
            <ContactsFilter onChangeFilter={onChangeFilter} />
            {/* <ContactAdd/> */}
            <div className='contact-list-container'>
                <>
                    {contacts?.map(contact => 
                        <ContactListPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />
                    )}
                </>
            </div>
        </div>
    )

}



