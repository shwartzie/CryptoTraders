import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../../customHooks/useForm'
import { contactService } from '../../services/contactService'
import { useDispatch } from 'react-redux'
import {addContact} from '../../store/actions/contactActions'

export const ContactEdit = () => {
    const [contact, handleChange, setContact] = useForm()

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
        await dispatch(addContact(contact))
        navigate('/contacts')
    }

    // const inputRefFunc = (elInput) => {
    //     elInput && elInput.focus()
    // }

    const onBack = () => {
        navigate(-1)
    }

    if (!contact) return <div className='spinner-roller'>Loading...</div>

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
                <section>
                    <input value={contact.phone} onChange={handleChange}
                        type="text" placeholder='Phone' name="phone" id="phone" />
                </section>
                <section>
                    <label htmlFor="bitcoin">Deposit Bitcoin</label>
                    <input value={contact.balance.bitcoin} onChange={handleChange}
                        type="number" name="bitcoin" id="bitcoin" />
                </section>
                <section>
                    <label htmlFor="ethereum">Deposit Ethereum</label>
                    <input value={contact.balance.ethereum} onChange={handleChange}
                        type="number" name="ethereum" id="ethereum" />
                </section>
                <div className='contact-actions'>
                    <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button>Save</button>
                </div>
            </form>
        </section>
    )
}