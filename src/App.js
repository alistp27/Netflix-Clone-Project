import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Browse } from './pages/Browse';
import { IsUserRedirect } from './helpers/routes';

const App = () => {
    const user = {}
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/browse' element={<Browse />} />
                    <Route path = '/signin' element = {<IsUserRedirect user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;