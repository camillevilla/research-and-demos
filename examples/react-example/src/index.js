import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import ManifestComponent from './ManifestComponent';
import registerServiceWorker from './registerServiceWorker';
import m3core from 'minimal_redux_poc';

ReactDOM.render(
        <Provider store={m3core.store}>
        <ManifestComponent />
        </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
