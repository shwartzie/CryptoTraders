import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { ContactPreviewDetails } from "../../cmps/ContactList/ContactPreviewDetails";
import { useEffect } from "react";
import { useForm } from "../../customHooks/useForm";
import { depositCurrency } from "../../store/actions/userActions";
export const UserProfile = () => {
    const { loggedInUser } = useSelector(state => state.userModule)
    const navigate = useNavigate()
    const onBack = () => navigate(-1)
    const [user, handleChange, setUser] = useForm()
    const dispatch = useDispatch()
    useEffect(() => {
        loggedInUser && setUser({...loggedInUser})
    }, [loggedInUser])

    const onDeposit = async (ev) => {
        ev.preventDefault()
        await dispatch(depositCurrency(user))
        navigate('/')
    }
    return (
        <div>
            {loggedInUser && <article className='contact-modal-preview'>
                <ContactPreviewDetails contact={loggedInUser} />
            </article>}
            {user && <section className='contact-edit '>
                <form className='contact-filter column' onSubmit={onDeposit}>
                    <section>
                        <label htmlFor="bitcoin">Deposit Bitcoin</label>
                        <input value={user.balance.bitcoin} onChange={handleChange}
                            type="number" name="bitcoin" id="bitcoin" />
                    </section>
                    <section>
                        <label htmlFor="ethereum">Deposit Ethereum</label>
                        <input value={user.balance.ethereum} onChange={handleChange}
                            type="number" name="ethereum" id="ethereum" />
                    </section>
                    <div className='contact-actions'>
                        <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                        <button>Save</button>
                    </div>
                </form>
            </section>}
        </div>
    )
}