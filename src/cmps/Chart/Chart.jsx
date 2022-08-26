import React from 'react'
import ReactApexChart from "react-apexcharts";

export class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: props.data.values.slice(0, 10)
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <ReactApexChart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="1250"
                            height="300"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

