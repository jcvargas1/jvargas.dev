import { Divider } from "@mui/material";
import React from "react";
import { CustomizedAppBar, CutstomizedToolBar, CustomText, LogoInitials, NavLinks, LinksContainer, LogoContainer, ResumeLink, Hamburger, Chevrons, InitialsContainer} from "../components_style/Header.style";
import { IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Resume from '../assets/Juan_Vargas_Resume.pdf'



export default function NavigationBar() {

  // Handles light/dark mode states

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      let backColor = checked ? '#404040' : 'white';
      document.body.style.background = backColor
      document.body.style.color = checked ? 'white' : 'black'
    };

    function getScreenSize(){
        const mql = window.matchMedia('(max-width: 768px)');
        let mobileView = mql.matches;

        if (mobileView) {
            return '4px'
        }
        else {
            return '10px'
        }
    }

    // Handles hamburger menu on mobile
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Light/Dark Mode switch
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        marginTop: getScreenSize(),
        

        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));

    return (
        <>
        <CustomizedAppBar style={{ background: 'transparent', boxShadow: 'none'}}>
            <CutstomizedToolBar>
                <LogoContainer>
                    <Chevrons style ={{color: checked ? 'black' : 'white'}}>&#10100;</Chevrons>
                    <InitialsContainer>
                        <LogoInitials style ={{color: checked ? 'black' : 'white'}}>J</LogoInitials>
                        <LogoInitials style ={{color: checked ? 'black' : 'white'}}>V</LogoInitials>
                    </InitialsContainer>
                    <Chevrons style ={{color: checked ? 'black' : 'white'}}>&#10101;</Chevrons>
                </LogoContainer>
                <Hamburger>
                <MaterialUISwitch checked = {checked} onChange={handleChange}/>
                    <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                        <MenuIcon /> 
                    </IconButton>
                    <Menu 
                       id="basic-menu"
                       anchorEl={anchorEl}
                       open={open}
                       onClose={handleClose}
                       MenuListProps={{
                         'aria-labelledby': 'basic-button',
                       }}>

                        <ResumeLink href='https://www.linkedin.com/in/jcvj/' style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>
                            <MenuItem onClick={handleClose}>
                                Linkedin</MenuItem>
                        </ResumeLink> 

                        <ResumeLink href='https://github.com/jcvargas1' style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>
                            <MenuItem onClick={handleClose}>Github</MenuItem>
                        </ResumeLink>

                        <ResumeLink href={Resume} download="Juan_Vargas_Resume.pdf" target="_blank" style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>
                            <MenuItem onClick={handleClose}> Resume</MenuItem>
                        </ResumeLink>
                        
                        <ResumeLink href='mailto:juan@jvargas.dev' target="_blank" style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>
                            <MenuItem onClick={handleClose}>Contact</MenuItem>
                        </ResumeLink>
                    </Menu>
                </Hamburger>
                <LinksContainer>
                    <ResumeLink href='https://github.com/jcvargas1' target="_blank" style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>Github</ResumeLink>
                    <ResumeLink href='https://www.linkedin.com/in/jcvj/' target="_blank" style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>Linkedin</ResumeLink>
                    <ResumeLink href='../assets/Juan_Vargas_Resume.pdf' download style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>Resume</ResumeLink>
                    <ResumeLink href='mailto:juan@jvargas.dev' style={{ textDecoration: 'none', color: checked ? 'black' : 'white' }}>Contact</ResumeLink>
                    <MaterialUISwitch checked = {checked} onChange={handleChange} />
                </LinksContainer>
                
            </CutstomizedToolBar>
        </CustomizedAppBar>
        <Divider/>
        </>
    )


}


