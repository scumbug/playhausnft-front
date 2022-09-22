import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/ContentContainer';
import { Accordion, AccordionTab } from 'primereact/accordion';

const FaqContainer = styled(ContentContainer)`
  div:first-child {
    flex-wrap: wrap;
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
      line-height: 2em;
      padding-top: 1px;
    }
  }
`;

const Faq = () => {
  return (
    <FaqContainer>
      <h1>FAQs</h1>
      <Accordion multiple>
        <AccordionTab header='What is Playhaus?'>
          Playhaus is your lifestyle brand. We are starting with pets and pet owners, but everyone
          is welcomed, especially if you like dogs and cats.
        </AccordionTab>
        <AccordionTab header='How do I join?'>
          Visit us on Twitter for the latest updates. Discord will be open shortly.
        </AccordionTab>
        <AccordionTab header='IP rights for Playhaus holders?'>
          We do not even have an NFT collection (yet).
        </AccordionTab>
        <AccordionTab header='How do I get on the guestlist?'>
          Chill with us on Twitter / Discord (Coming Soon), share good vibes and lots of photos of
          your dogs and cats!
        </AccordionTab>
        <AccordionTab header='When is the mint?'>
          We do not even have an NFT collection (yet).
        </AccordionTab>
        <AccordionTab header='How much is the mint?'>
          Obviously free. Are there still paid mints these days? Oh, you'll need some gas duh.
        </AccordionTab>
      </Accordion>
    </FaqContainer>
  );
};

export default Faq;
