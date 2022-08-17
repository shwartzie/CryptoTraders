import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../../customHooks/useForm'
import { contactService } from '../../services/contactService'

export const ContactEdit = () => {

    const [contact, handleChange, setContact] = useForm()

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [])


    const loadContact = async () => {
        const contactId = params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        setContact(contact)
    }

    const onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.save({ ...contact })
        navigate('/')
    }

    const inputRefFunc = (elInput) => {
        elInput && elInput.focus()
    }

    if (!contact) return <div>Loading...</div>

    return (
        <section className='contact-edit'>
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            <form className='contact-filter column' onSubmit={onSaveContact}>
                <section>
                    <input ref={inputRefFunc} value={contact.name} onChange={handleChange} type="text" placeholder='Name' />
                </section>
                <section>
                    <input ref={inputRefFunc} value={contact.email} onChange={handleChange} type="text" placeholder='Email' />
                </section>
                <button>Save</button>
            </form>
        </section>
    )
}