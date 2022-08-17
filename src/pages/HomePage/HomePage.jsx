
import img from '../../images/bitcoin.jpg'
function HomePagePreview() {
    const user = {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
    
    return (
        <div className="homepage-view">
            <img style={{'z-index': '-1'}} src={img}/>
            <div>
                <h2>Hello {user.name}</h2>
                <h2>💰 {user.coins}</h2>
            </div>
        </div>
    )
}

export default HomePagePreview