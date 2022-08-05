import React from 'react'
import faqsData from '../fixtures/faqs.json'
import Accordion from '../components/accordion/index'
import OptForm from '../components/optForm/index'

export default function AccordionContainer() {
    return (
        <Accordion>
            <Accordion.Title> Frequntly Asked Questions</Accordion.Title>
            {faqsData.map((item) => {
                return (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
            <OptForm>
                <OptForm.Input placeholder = "Email Address" />
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
            </OptForm>
        </Accordion>

    )
}