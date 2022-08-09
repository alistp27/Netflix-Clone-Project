import React from 'react'
import OptForm from '../components/optForm/index'
import { HeaderContainer } from '../Container/headerContainer'
import { JumpbotronContainer } from '../Container/jumbotronContainer'
import { FooterContainer } from '../Container/footerContainer'
import AccordionContainer from '../Container/accordionContainer'
import {Feature} from '../components/feature/index'
export default function Home() {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Unlimited Films,TV Programmes And More </Feature.Title>
                    <Feature.SubTitle>Watch AnyWhere. Cancel At Any Time.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try It Now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                </OptForm>
                </Feature>
            </HeaderContainer>
            <JumpbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}
