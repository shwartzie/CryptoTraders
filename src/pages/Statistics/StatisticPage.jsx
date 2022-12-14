import { Component } from 'react'
import { Chart } from '../../cmps/Chart/Chart'
import { bitcoinService } from '../../services/bitcoinService'

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null,
        isLoading: true
    }

    async componentDidMount() {
        const marketPrice = await bitcoinService.getMarketPrice()
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice, confirmedTransactions, isLoading: false })
    }

    render() {
        const { marketPrice, isLoading } = this.state
        if (isLoading) return <div className="spinner-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        return (
            <section className='charts-page layout' style={{width: "1500px"}}>
                <Chart data={marketPrice} />
            </section>
        )
    }
}
