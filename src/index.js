import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import {Provider} from 'mobx-react';
import './index.css';
import App from './App';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
    <BrowserRouter>
        <LocaleProvider locale={zh_CN}>
            <Provider {...store}>
                <App/>
            </Provider>
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.register();
