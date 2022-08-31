import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../customHooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { contactService } from "../services/contactService"
import { decreaseBalance, updateLoggedinUser } from "../store/actions/userActions"
import { useEffect, useState } from "react"
import { addBalance, saveContact, updateContact } from "../store/actions/contactActions"
import { userService } from "../services/userService"
export const TransferForm = () => {
    const params = useParams()
    const [contact, handleChange, setContact] = useForm()
    const [loggedInUser, setLoggedinUser] = useState(null)
    const [bitcoinOpts, setBitcoinOpts] = useState([])
    const [ethOpts, setEthOpts] = useState([])
    const [ethVal, setEthVal] = useState(0)
    const [bitcoinVal, setBitcoinVal] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setLoggedInUser = async () => {
        const user = await userService.getLoggedinUser()
        setLoggedinUser(user)
        return user
    }

    useEffect(() => {
        loadContact()
        setLoggedInUser().then((user) => {
            createOptions(user)
        })
    }, [])

    const handleSelectedValues = (ev) => {
        handleChange(ev)

        if (ev.target.name === 'send-bitcoin') {
            setBitcoinVal(ev.target.value)
        } else if (ev.target.name === 'send-ethereum') {
            setEthVal(ev.target.value)
        }
    }

    const loadContact = async () => {
        const contactId = params.id
        const contact = contactId && await contactService.getContactById(contactId)
        setContact(contact)
    }

    const onSendCurrency = async (ev) => {
        ev.preventDefault()
        await dispatch(decreaseBalance(loggedInUser, ethVal, bitcoinVal))
        await dispatch(addBalance(contact))
        navigate(-1)
    }
    const createOptions = (user) => {
        const bitcoinVal = user.balance.bitcoin
        const ethVal = user.balance.ethereum
        const bitt = [];
        const ethh = [];

        if (!bitcoinOpts.length && !ethOpts.length) {
            for (let i = 0; i <= bitcoinVal; i++) {
                bitt.push(i)
            }
            for (let i = 0; i <= ethVal; i++) {
                ethh.push(i)
            }
        }

        setBitcoinOpts(bitt)
        setEthOpts(ethh)
    }

    const onBack = () => navigate(-1)


    if (!contact || !loggedInUser) return <div className='spinner-roller'>Loading...</div>
    return (
        <div>
            {loggedInUser && contact && (bitcoinOpts && ethOpts) && 
            (<form className='contact-filter column' onSubmit={onSendCurrency}>
                <section>
                    <label htmlFor="send-bitcoin">Transfer Bitcoin</label>
                    <select name="send-bitcoin" id="send-bitcoin" onChange={handleSelectedValues}>
                        {(bitcoinOpts.map((val, idx) => {
                            return <option key={`bitcoin-${idx}`} value={val}>{val}</option>
                        }))}
                    </select>
                    <label htmlFor="send-ethereum">Transfer Ethereum</label>
                    <select name="send-ethereum" id="send-ethereum" onChange={handleSelectedValues}>
                        {(ethOpts.map((val, idx) => {
                            return <option key={`eth-${idx}`} value={val}>{val}</option>
                        }))}
                    </select>
                </section>
                <div className='contact-actions'>
                    <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button>Save</button>
                </div>
            </form>)}
        </div>
    )
}