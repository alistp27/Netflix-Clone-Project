import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { SignUp } from './pages/SignUp';
import { IsUserRedirect } from './helpers/routes';
import { SignIn } from './pages/SignIn';
import { Browse } from './pages/Browse';

const App = () => {
    const user = null
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IsUserRedirect user={user}><Home /></IsUserRedirect>} />
                    <Route path='/signup' element={<IsUserRedirect user={user}><SignUp /></IsUserRedirect>} />
                    <Route path='/browse' element={<IsUserRedirect user={user}><Browse /></IsUserRedirect>} />
                    <Route path = '/signin' element = {<IsUserRedirect user={user}><SignIn /></IsUserRedirect>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;