import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";

const root = ReactDOM.createRoot(document.getElementById('root'));
// let stockChart = root.container.children.push(
//     am5stock.StockChart.new(root, {})
//   );
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
