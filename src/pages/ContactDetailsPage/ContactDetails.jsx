import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from '../../images/wallpaper.png'
import { contactService } from '../../services/contactService'

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


    if (!contact) return <div>Loading...</div>
    return (
        <div className='contact-details contact-display'>
            <img  className="wallpaper" src={img}/>

            <section>
                <h3 style={{'margin-top': '50px'}}>
                    <span>
                        Fullname:
                    </span>
                     {contact.name}
                    </h3>
            </section>
            <section>
                <h3>
                    <span>
                        Email:
                    </span>
                    {contact.email}
                </h3>
            </section>
            <section>
                <h3>
                    <span>
                        <i className="fa-solid fa-phone" style={{ color: 'blue', opacity: '0.6' }}></i>
                    </span>
                    {contact.phone}
                </h3>
            </section>

            <section className='contact-actions'>
                <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <img src={contact.imgUrl} alt="" />
                <button onClick={() => navigate(`/contact/edit/${contact._id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
            </section>
            {/* <Link to='/contact/r3' >Next contact</Link> */}
        </div>
    )

}