import React from 'react'
import ReactDOM from 'react-dom/client';
import ReactApexChart from "react-apexcharts";
import { Sparklines, SparklinesLine } from 'react-sparklines';

// export function Chart(props) {

//     const { name, description, values } = props.data
//     if (!values) return <div>Loading...</div>
//     return (
//         <article className="chart-preview">
//             <h2>{name}</h2>
//             <Sparklines data={values} width={100} height={50} margin={5}>
//                 <SparklinesLine color="blue" />
//             </Sparklines>
//             <p>{description}</p>
//         </article>
//     )
// }

export class Chart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
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

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Chart);