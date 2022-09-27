import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/ContentContainer';
import { Accordion, AccordionTab } from 'primereact/accordion';

const FaqContainer = styled(ContentContainer)`
  div:first-child {
    flex-wrap: wrap;
    flex-direction: column;

    h1 {
      text-align: center;
      flex-basis: 100vw;
    }

    .p-accordion {
      width: 60vw;
    }

    .p-accordion-tab {
      box-shadow: none;
    }

    .p-accordion-header-text {
      font-size: ${(props) => props.theme.fontlg};
      color: ${(props) => props.theme.darkblue};
      letter-spacing: 1px;
    }

    .p-accordion-content {
      color: ${(props) => props.theme.darkblue};
      line-height: 2;
      padding-top: 1px;
    }
  }
`;

const FaqTitle = styled.div``;

const FaqContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Faq = () => {
  return (
    <FaqContainer id='faq'>
      <FaqTitle>
        <h1>FAQ</h1>
      </FaqTitle>
      <FaqContent>
        <Accordion multiple>
          <AccordionTab header='What is Playhaus?'>
            Playhaus is a lifestyle brand for pets, pet owners, and everybody who loves animals -{' '}
            <span style={{ fontStyle: 'italic' }}>so basically everyone!</span>
          </AccordionTab>
          <AccordionTab header='How do I join?'>
            Visit us on Twitter for the latest updates. Discord will be open shortly.
          </AccordionTab>
          <AccordionTab header='IP rights for Playhaus holders?'>- to be updated -</AccordionTab>
          <AccordionTab header='How do I get on the guestlist?'>
            Chill with us on Twitter / Discord (coming soon), share good vibes and lots of photos of
            your dogs and cats!
          </AccordionTab>
          <AccordionTab header='When is the mint?'>
            Again, hang out with us on Twitter and Discord (coming soon) for the latest updates!
          </AccordionTab>
          <AccordionTab header='How much is the mint?'>
            Absolutely FREE! But then again are there still paid mints these days?
          </AccordionTab>
        </Accordion>
      </FaqContent>
    </FaqContainer>
  );
};

export default Faq;
