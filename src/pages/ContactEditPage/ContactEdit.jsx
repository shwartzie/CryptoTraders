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
        await contactService.saveContact({ ...contact })
        navigate('/contacts')
    }

    // const inputRefFunc = (elInput) => {
    //     elInput && elInput.focus()
    // }
    const onBack = () => {
        navigate(-1)
    }

    if (!contact) return <div>Loading...</div>

    return (
        <section className='contact-edit'>
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            <form className='contact-filter column' onSubmit={onSaveContact}>
                <section>
                    <input value={contact.name} onChange={handleChange}
                        type="text" placeholder='Name' name="name" id="name" />
                </section>
                <section>
                    <input value={contact.email} onChange={handleChange}
                        type="text" placeholder='Email' name="email" id="email" />
                </section>
                <div className='contact-actions'>
                    <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button>Save</button>
                </div>
            </form>
        </section>
    )
}