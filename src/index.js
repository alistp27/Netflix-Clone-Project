import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Globalstyle } from './global-styles'
import 'normalize.css'
import { firebase } from './lib/firebase.prod'
import { FireBase } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <FireBase.Provider value={{ firebase }}>
            <Globalstyle />
            <App />
        </FireBase.Provider>
    </>
);

