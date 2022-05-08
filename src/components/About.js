import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import { ImageContainer, IntroContainer, IntroSentence, MyPicture, TypeSentence, HeroContainer, SitesContainers, SocialButtonImg, TypeName,WavesSVG, ContactContain, ContactText} from "../components_style/About.styles";
import personalImage from '../assets/me.jpeg'
import githubImage from '../assets/github.png'
import linkedinImage from '../assets/linkedin.png'
import download_image from '../assets/download_img.png'
import Resume from '../assets/Juan_Vargas_Resume.pdf'
import { ImageLabel, LinkAttr } from "../components_style/About.styles";
import { Typography } from "@mui/material";



// Screen size specifically for adjusting the typewriter effect text size.
function getScreenSize(){
    const mql = window.matchMedia('(max-width: 768px)');
    let mobileView = mql.matches;
    
    if (mobileView) {
        return '2.5rem'
    }
    else{
        return '3.5rem'
    }
}

// Everything under the header displayed on page.
export default function AboutSection() {

    return (
<>
        <IntroContainer>
            <TypeName>
            <TypeSentence>
                <TypeWriterEffect 
                textStyle={{fontSize: getScreenSize()}}
                startDelay={1000}
                multiText={['Hello', 'Hola']}
                multiTextLoop={true}
                multiTextDelay = {3000}
                typeSpeed={300}
                hideCursorAfterText={true}
            />
            <h1>👋</h1>
          </TypeSentence>
          </TypeName>
          <TypeSentence>
            <IntroSentence>I'm Juan, a full-stack developer.</IntroSentence>
          </TypeSentence>
          </IntroContainer>
        <HeroContainer>
            <ImageContainer>
                <MyPicture src={personalImage} alt="Me" />
            </ImageContainer>

            <SitesContainers>
                
                    <LinkAttr href="https://github.com/jcvargas1" target="_blank">
                    <SocialButtonImg src = {githubImage} alt="github" />
                    <ImageLabel>Github</ImageLabel>
                    </LinkAttr>

                    <LinkAttr href="https://www.linkedin.com/in/jcvj/" target="_blank">
                    <SocialButtonImg src = {linkedinImage} alt="linkedin" />
                    <ImageLabel>Linkedin</ImageLabel>
                    </LinkAttr>

                    <LinkAttr href={Resume} download="Juan_Vargas_Resume.pdf" target="_blank">
                    <SocialButtonImg src = {download_image} alt="linkedin"/>
                    <ImageLabel>Resume</ImageLabel>
                    </LinkAttr>
                    
            </SitesContainers>
            
        </HeroContainer>
        <ContactContain>
        <ContactText>Juan Vargas</ContactText>
            <ContactText>B.S., Computer Science </ContactText>
            <ContactText>Contact: juan@jvargas.dev</ContactText>
        </ContactContain>
        <WavesSVG/>
</>
        
    )
}