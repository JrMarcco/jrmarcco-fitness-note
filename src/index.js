import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import './index.css';
import App from './App';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            <App/>
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.register();
