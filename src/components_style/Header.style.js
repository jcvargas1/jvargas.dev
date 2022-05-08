import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


export const CustomizedAppBar = styled(AppBar)`
background-color: #FFFFFF;
position: static;
box-shadow: none;
`;

export const CutstomizedToolBar = styled(Toolbar)`
    justify-content: space-around;

    @media (max-width: 480px) {
            justify-content: space-between;
        } 
`;

export const LogoInitials = styled(Typography)`
    font-family: 'Herr Von Muellerhoff', cursive;
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    margin-left: 0px;
`;

export const Chevrons = styled(Typography)`
    color: black;
    font-size: 2.5rem;
    font-weight: 100;
    display: flex;
    justify-content: flex-end;
    margin-left: 0px;
    animation: spin 4s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        30% { transform: rotate(30deg); }
}
`;

export const NavLinks = styled(Typography)`
    color: black;
    font-size: 1rem;
    font-weight: 700;
    margin: 10px;
`;

export const LinksContainer = styled('div')`
    display: flex;
    justify-content: center;
`;

export const LogoContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
`;

export const InitialsContainer = styled('div')`
    display: flex;
    margin-left: 10px;
    margin-right: 20px;
`;

export const ResumeLink = styled('a')`
    color: black;
    font-weight: bold;
    margin: 10px;
    font-size: 1.5rem;

    @media (max-width: 480px) {
            margin:0;
        } 

`;
