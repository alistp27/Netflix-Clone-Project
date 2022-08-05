import React from 'react'
import faqsData from '../fixtures/faqs.json'
import Accordion from '../components/accordion/index'

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
        </Accordion>
    )
}