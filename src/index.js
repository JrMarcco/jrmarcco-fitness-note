import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import axios from 'axios';
import './index.css';
import App from './App';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';

axios.interceptors.response.use(resp => {
    return resp.data;
});

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            <App/>
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.register();
