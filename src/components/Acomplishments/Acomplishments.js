import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '4+', text: 'Shopify stores currently in charge'},
  { number: '6.0 GPA', text: 'Bachelor of Software Engineering', },
  { number: '500+', text: 'Linkedin Followers', },
  { number: '8.0', text: 'IELTS, 2020', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <SectionTitle>Personal Accomplishedments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
