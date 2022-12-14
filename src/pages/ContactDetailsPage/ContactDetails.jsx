import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from '../../images/wallpaper.png'
import { contactService } from '../../services/contactService'
import { ContactPreviewDetails } from '../../cmps/ContactList/ContactPreviewDetails.jsx'
import { ContactMovements } from './ContactMovements.jsx'
export const DisplayContactDetails = () => {


    const [contact, setContact] = useState(null)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadContact()
    }, [params.id])


    async function loadContact() {
        const contactId = params.id
        const contact = await contactService.getContactById(contactId)
        setContact(contact)
    }

    const onBack = () => {
        navigate(-1)
    }


    if (!contact) {
        return <div className='spinner-roller'>Loading...</div>
    }
    // const { name, phone, email, imgUrl, balance: { bitcoin, ethereum } } = contact
    return (
        <>
            <article className='contact-actions contact-details-article layout'>
                <main>
                    <ContactPreviewDetails contact={contact} />
                    <div className='flex' style={{ justifyContent: 'space-between' }}>
                        <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                        <button onClick={() => navigate(`/contact/edit/${contact._id}`)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                </main>
                <aside className='contact-details-aside'>
                    <ContactMovements contact={contact}/>
                </aside>
            </article>
            {/* <Link to='/contact/r3' >Next contact</Link> */}
        </>
    )

}