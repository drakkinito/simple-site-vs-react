import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootRouter from './RootRouter';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootRouter />
        </Router>
    </Provider>, document.getElementById('root'))





















// import { BrowserRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './store'

// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             <RootRouter />
//         </Router>
//     </Provider>, document.getElementById('root'));

serviceWorker.unregister();
