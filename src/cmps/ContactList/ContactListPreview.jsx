import { useNavigate } from "react-router-dom";
export const ContactListPreview = ({ contact, onRemoveContact}) => {
    const { name, _id, imgUrl } = contact
    const navigate = useNavigate()
    return (
        <section className="contact-display">
            <div onClick={() => navigate(`/contact/${_id}`)}>
                <img src={imgUrl} alt="" />
                <span>{name}</span>
                <button  onClick={(ev) => onRemoveContact(contact._id, ev)}>
                    <span>
                        <i class='fa fa-trash'></i>
                    </span>
                </button>
            </div>
        </section>
    )
}
