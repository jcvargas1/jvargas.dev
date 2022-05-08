import React from "react";
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { ReactComponent as Waves} from '../assets/waves.svg'

export const IntroContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media (min-height: 2160px){
        margin-top: 100px;
    }

`;

export const IntroSentence = styled('h1')`
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0px;

    @media (min-width: 0px ) and  (max-width: 750px) {
            font-size: 1.3rem;
            position: absolute;
    }

    @media (min-width: 751px ) and  (max-width: 1000px) {
            font-size: 2.0rem;
            position: absolute;
    }
`;

export const TypeSentence = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
`;

export const MyPicture = styled('img')`
    width: 330px;
    height: 420px;
    border-radius: 25px;
    margin-top: 30px;
    box-shadow: -20px -20px #89CFF0,0 0 10px rgba(0,0,0,.15);
    transition: transform .25s ease-in-out;
    :hover {
        transform:
        scale(1.05) rotate(10deg);
    }

    @media (min-width: 0px ) and  (max-width: 1024px) {
            width: 230px;
            height: 320px;
        }
    
    @media (min-height: 1440px){
        width: 510px;
        height: 620px;
    }
`;

export const ImageContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    @media (min-width: 0px ) and  (max-width: 1024px) {
            align-items: center;
            margin-bottom: 20px;
        }

`;


export const HeroContainer = styled('div')`
     display: flex;
     flex-direction: row;
     //justify-content: center;
     margin-top: 100px;

     @media (min-width: 0px ) and  (max-width: 1024px) {
            flex-direction: column;
            margin-top: 50px;
        }

`;

export const SitesContainers = styled(Container)`
    display: flex;
    //flex-direction: column;
    align-items: center;

    @media (min-width: 0px ) and  (max-width: 1024px) {
            justify-content: center;
        }
    @media (min-height: 2160px){
        margin-left: -400px;
}
`;

export const SocialButtonImg = styled('img')`
    height: 130px;
    width: 130px;

    transition: transform 1s ease-in-out;
    :hover {
        transform:
        scale(1.2) rotate(360deg);
    }
    @media (max-width: 480px) {
        height: 100px;
        width: 100px;
        }

    @media (min-height: 1440px){
        width: 200px;
        height: 200px;
    }

        


`;
export const SocialButtons = styled('button')`
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
`;

export const TypeName = styled(Container)`
//position: absolute;
    
`;

export const WavesSVG = styled(Waves)`
    //overflow:hidden
    width: 100%;
    height: 35%;
    transform: rotate(180deg);
    position: fixed;
    bottom:0;
    z-index: -1;

    @media (min-width: 0px ) and  (max-width: 767px) {
        width: 100%;
        height: 10%;
        }

`;

export const ImageLabel = styled(Typography)`
    text-align: center;
    font-weight: bold;

    @media (max-width: 480px) {
            font-size:1.2rem;
        }

    @media (min-width: 751px ) and  (max-width: 1000px) {
        font-size: 1.2rem;
}

    @media (min-height: 1440px){
        font-size: 1.8rem;
    }
    
`;

export const LinkAttr = styled('a')`
    text-decoration: none;
    color: inherit;
    
`;

export const ContactContain = styled(Container)`
    margin-top: 50px;
    
`;


export const ContactText = styled(Typography)`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;

    @media (max-width: 480px) {
            font-size:1rem;
        }

    @media (min-height: 1440px){
        font-size: 1.8rem;
    }
`;