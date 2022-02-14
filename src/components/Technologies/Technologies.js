import React from 'react';
import { DiAngularSimple, DiFirebase, DiReact, DiWordpress, DiZend } from 'react-icons/di';
import { AiFillShopping } from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a lot of technologies in the web development world
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem"/>
          <DiAngularSimple size="3rem"/>
          <DiWordpress size="3rem"/>
        </div>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React, Angular, Wordpress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node, MySql, SQLite
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillShopping size="3rem"/>
        <ListContainer>
          <ListTitle>
            E-commerce
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Shopify
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
