import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp';
import { Browse } from './pages/Browse';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/browse' element={<Browse />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;