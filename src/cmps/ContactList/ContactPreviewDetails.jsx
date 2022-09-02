import bitcoinImg from '../../images/bitcoin.png'
import ethImg from '../../images/ethereum.png'
export const ContactPreviewDetails = ({ contact: { fullname, phone, email, imgUrl, balance: { bitcoin, ethereum } } }) => {
    console.log(bitcoin);
    return (
        <div>
            <div className="wrapper">
                <div className="product-img">
                    <img src="https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg" alt="" height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{fullname}</h1>
                        <h2>Great Trader</h2>
                        <p> <span>{email}</span> <br /> <span>Phone number: {phone}</span></p>
                        <h2>Balance</h2>
                    </div>

                    <div className="product-price-btn">
                        <p> <img src={bitcoinImg} height="30" width="30" alt="" /> <span>{bitcoin} </span></p>
                        <p><img src={ethImg} height="30" width="30" alt="" /> <span>{ethereum}</span> </p>
                    </div>

                </div>
            </div>
        </div >
    )
}

