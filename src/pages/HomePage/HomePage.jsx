import { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { login } from '../../store/actions/userActions'

function HomePagePreview() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(login())
    }, [])

    return (
        <main className="homepage-wallpaper">
            {loggedInUser && <section className='layout homepage-view'>
                <section className="hero">
                    <h1>Buy, trade, and hold 350+ cryptocurrencies on CryptoTraders</h1>
                </section>
                <section className="website-details">
                    <div >
                        <h2>$76 billion</h2>
                        <h4>24h trading volume on CryptoTraders exchange</h4>
                    </div>
                    <div >
                        <h2>350+</h2>
                        <h4>Cryptocurrencies listed</h4>
                    </div>
                    <div >
                        <h2>90 million</h2>
                        <h4>Registered users who trust CryptoTraders</h4>
                    </div>
                    <div >
                        <h2>0.10%</h2>
                        <h4>Lowest transaction fees</h4>
                    </div>
                </section>
            </section>}


        </main>
    )
}

export default HomePagePreview


{/* <div className="balance-icons">
                        <span>
                            <img src={bitcoinImg} height="30" width="30" alt="" />
                            {loggedInUser.balance.bitcoin}
                        </span>
                        <span>
                            <img src={ethImg} height="30" width="30" alt="" />
                            {loggedInUser.balance.ethereum}
                        </span>
                    </div> */}