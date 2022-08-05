import React from 'react';
import { JumpbotronContainer } from './Container/jumbotronContainer'
import { FooterContainer } from './Container/footerContainer'
import AccordionContainer from './Container/accordionContainer'
const App = () => {
    return (
        <>
            <JumpbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    );
}

export default App;