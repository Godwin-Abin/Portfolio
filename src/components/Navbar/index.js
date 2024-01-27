import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer,  MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { useTheme } from 'styled-components';
import { FaBars, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
// FaPlay , FaPause

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const [isPlaying, setIsPlaying] = React.useState(true); // Add state for play/pause

  // Add an audio element with the background music
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    // Play the audio when the component mounts
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // Update the effect when isPlaying changes

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src="https://firebasestorage.googleapis.com/v0/b/gabinroy.appspot.com/o/favicon1.png?alt=media&token=1aa0b12b-b238-4ea4-9c7f-03bc23e07a21" width="25px" height="25px" alt='Angular Logo'></img> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen);
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen);
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen);
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen);
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen);
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
      
      {/* Add the audio element */}
      <audio ref={audioRef} src="https://firebasestorage.googleapis.com/v0/b/gabinroy.appspot.com/o/Art%20of%20silence%20by%20uniq%20(without%20Synth%20).mp3?alt=media&token=15fc54e8-5655-4428-ab15-2cfff9161cd2" loop />
      {/* https://firebasestorage.googleapis.com/v0/b/gabinroy.appspot.com/o/Dark%20Piano%20Trap.mp3?alt=media&token=c41ce7ee-bc66-4bc1-a588-39861f1639ee */}
    </Nav>
  );
};

export default Navbar;
