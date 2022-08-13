import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
           My name is Patrick Mugambi.I am a web developer based in Nairobi,Kenya.
          </StyledParagraph>
          <StyledParagraph>
           I attended <a href="https://moringaschool.com/">Moringa</a> school where i pursued full stack web development with python and Angular.
           </StyledParagraph>
          <StyledParagraph>
          I love to create beautiful and responsive solutions.I work with vue and react frameworks for frontend and Django for backend.
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
