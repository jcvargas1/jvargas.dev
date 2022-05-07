import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import { ImageContainer, IntroContainer, IntroSentence, MyPicture, TypeSentence, HeroContainer, SitesContainers, SocialButtonImg, TypeName,WavesSVG} from "../components_style/About.styles";
import personalImage from '../assets/me.jpeg'
import githubImage from '../assets/github.png'
import linkedinImage from '../assets/linkedin.png'
import download_image from '../assets/download_img.png'
import Resume from '../assets/Juan_Vargas_Resume.pdf'


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
                
                    <a href="https://github.com/jcvargas1" target="_blank">
                    <SocialButtonImg src = {githubImage} alt="github" />
                    </a>

                    <a href="https://www.linkedin.com/in/jcvj/" target="_blank">
                    <SocialButtonImg src = {linkedinImage} alt="linkedin" />
                    </a>

                    <a href={Resume} download="Juan_Vargas_Resume.pdf" target="_blank">
                    <SocialButtonImg src = {download_image} alt="linkedin"/>
                    </a>
            </SitesContainers>
            
        </HeroContainer>
        <WavesSVG/>
</>
        
    )
}