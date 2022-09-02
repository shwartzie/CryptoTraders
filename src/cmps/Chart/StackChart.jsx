import React from 'react'
import ReactApexChart from "react-apexcharts"

export class StackChart extends React.Component {
    constructor(props) {
        super(props)
        const { trades, transfers, sells, buys, profit } = this.props.movements
        this.state = {
            options: {
                series: [
                    {
                        name: 'Trades',
                        data: trades
                    },
                    {
                        name: 'Transfers',
                        data: transfers
                    },
                    {
                        name: 'Sells',
                        data: sells
                    },
                    {
                        name: 'Buys',
                        data: buys
                    },
                    {
                        name: 'Profit',
                        data: profit
                    }
                ],
                chart: {
                    type: 'bar',
                    height: 500,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: "Contact's Movements History"
                },
                xaxis: {
                    categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
                    labels: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }
        }
    }

    render() {
        console.log(this.props.movements)
        return (
            <div className="app" style={{ marginTop: "50px" }}>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.options.series}
                    type="bar"
                    height={500}
                    width={550}
                />
            </div>

        )
    }
}

