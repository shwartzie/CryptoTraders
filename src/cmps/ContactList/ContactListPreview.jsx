import { useNavigate } from "react-router-dom"
import img from '../../images/Avatar.png'
export const ContactListPreview = ({ contact, onRemoveContact, contactPreview }) => {
    const { name, _id, imgUrl, balance: { bitcoin, etherium } } = contact
    const navigate = useNavigate()
    return (
        <section className="contact-display">
            <div onClick={() => navigate(`/contact/${_id}`)} onMouseEnter={() => contactPreview(contact)}
                onMouseLeave={() => contactPreview(false)}>
                <div className="contact-display-name-url">
                    <img src={imgUrl ? imgUrl : img} alt="" />
                    <span>{name}</span>
                </div>

                <div className="contact-display-actions">
                    <button onClick={(ev) => onRemoveContact(contact._id, ev)}>
                        <span>
                            <i className='fa fa-trash'></i>
                        </span>
                    </button>

                    <button onClick={
                        (ev) => {
                            ev.stopPropagation()
                            navigate(`/contact/edit/${contact._id}`)
                        }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
