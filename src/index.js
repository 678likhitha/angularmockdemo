import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { createStore, compose } from 'redux';
const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);

const store = finalCreateStore(reducers);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();

