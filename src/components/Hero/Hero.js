import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Salut! Eu sunt Elvis <br />
        acesta este portofoliul meu.
      </SectionTitle>
      <SectionText>
        Scopul acestui portofoliu este să îi ajute pe ceilalți să vadă ce fac și
        să îmi evidențiez abilitățile în fața celor interesați de aplicații
        grozave.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:lazarelvis15@gmail.com")}
      >
        Contact
      </Button>
    </LeftSection>
    <RightSection>
      <img
        style={{ borderRadius: "50%", height: "240px", width: "240px" }}
        src="/images/lazar-elvis-image-profil.jpg"
        alt="Lazar Elvis"
      />
    </RightSection>
  </Section>
);

export default Hero;
