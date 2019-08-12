import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import * as serviceWorker from './serviceWorker';
import ReduxProvider from './Data/ReduxProvider'

ReactDOM.render(
<ReduxProvider>
<Application />
</ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
