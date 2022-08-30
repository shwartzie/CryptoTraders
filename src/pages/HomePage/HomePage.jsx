import { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, withRouter } from "react-router-dom";
import { login } from '../../store/actions/userActions'
import bitcoinImg from '../../images/bitcoin.png'
import ethImg from '../../images/ethereum.png'

function HomePagePreview() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(login())
    }, [])

    return (
        <main className="homepage-wallpaper">
            {loggedInUser && <section className='layout homepage-view'>
                <div >
                    <h1>Welcome Back {loggedInUser.fullname} ! </h1>
                    <div className="balance-icons">
                        <span>
                            <img src={bitcoinImg} height="30" width="30" alt="" />
                            {loggedInUser.balance.bitcoin}
                        </span>
                        <span>
                            <img src={ethImg} height="30" width="30" alt="" />
                            {loggedInUser.balance.ethereum}
                        </span>
                    </div>
                </div>

                <section className="hero">
                    <h1>The best market place in the space</h1>
                    <h2>You are able to trade with everyone around the globe!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Perferendis repudiandae consequuntur libero in necessitatibus,
                        quae voluptates adipisci, eum nulla accusantium saepe numquam earum!
                        Officiis quas nihil quo, eveniet et ratione?
                    </h2>

                </section>
            </section>}


        </main>
    )
}

export default HomePagePreview