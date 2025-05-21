import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tehnologii</SectionTitle>
    <SectionText>
      Am lucrat cu o gamă variată de tehnologii în dezvoltarea web – de la
      back-end la design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiență cu <br />
            React JS si Next.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiență cu <br />
            Node.js si baze de date: SQL si NoSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobexd size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiență cu <br />
            tool-uri ca Adobe XD si Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
