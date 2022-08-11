import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Globalstyle } from './global-styles'
import 'normalize.css'
import { firebase } from './lib/firebase.prod'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Globalstyle />
        <App />
    </>
);

