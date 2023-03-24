import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';/* provider is a component */

import './index.css';
import App from './App';
import store from './components/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
