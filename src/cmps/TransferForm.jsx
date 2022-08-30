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
    const [bitcoinSelected, setSelectedBitcoin] = useState(0)
    const [ethSelected, setSelectedEth] = useState(0)
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

    const loadContact = async () => {
        const contactId = params.id
        const contact = contactId && await contactService.getContactById(contactId)
        setContact(contact)
    }
    const onSendCurrency = async (ev) => {
        ev.preventDefault()
        setSelectedBitcoin(bitcoinSelected)
        setSelectedEth(ethSelected)

        await dispatch(decreaseBalance(loggedInUser, ethSelected, bitcoinSelected))
        await dispatch(addBalance(contact, ethSelected, bitcoinSelected))
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

    const onBack = (ev) => {
        navigate(-1)
    }

    if (!contact || !loggedInUser) return <div className='spinner-roller'>Loading...</div>
    return (
        <div>
            {loggedInUser && contact && (bitcoinOpts && ethOpts) && (<form className='contact-filter column' onSubmit={onSendCurrency}>
                <section>
                    <select name="send-bitcoin" id="send-bitcoin" onChange={handleChange}>
                        {(bitcoinOpts.map((val, idx) => {
                            return <option key={`bitcoin-${idx}`} value={val}>{val}</option>
                        }))}
                    </select>
                    <select name="send-ethereum" id="send-ethereum" onChange={handleChange}>
                        {(ethOpts.map((val, idx) => {
                            return <option key={`eth-${idx}`} value={val}>{val}</option>
                        }))}
                    </select>
                </section>
                {/* <section>
                    <label htmlFor="bitcoin">Deposit Bitcoin</label>
                    <input value={loggedInUser.balance.bitcoin} onChange={handleChange}
                        type="number" name="bitcoin" id="bitcoin" />
                </section>
                <section>
                    <label htmlFor="ethereum">Deposit Ethereum</label>
                    <input value={loggedInUser.balance.ethereum} onChange={handleChange}
                        type="number" name="ethereum" id="ethereum" />
                </section> */}
                <div className='contact-actions'>
                    <button onClick={onBack}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button>Save</button>
                </div>
            </form>)}
        </div>
    )
}