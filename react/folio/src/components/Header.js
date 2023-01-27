import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";



const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {


const isHidden = useScrollDirection ();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  function useScrollDirection() {
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {

      let lastScrollY = window.pageYOffset
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset
        const goingDown = scrollY > lastScrollY
        const diff = 4
        const stateNotMatched = goingDown !== isHidden
        const scrollDownTooFast = scrollY - lastScrollY > diff
        const scrollUpTooFast = scrollY - lastScrollY <- diff
  
        const shouldToggleHeader = stateNotMatched && (scrollDownTooFast || scrollUpTooFast)
        if (shouldToggleHeader) {
          setIsHidden(goingDown)
        }
        lastScrollY = scrollY > 0 ? scrollY : 0
      };
  
      window.addEventListener("scroll", updateScrollDirection)
      return () => {
        window.removeEventListener("scroll", updateScrollDirection)
      }
    }, [isHidden]);
  
    return isHidden;
  }



  useEffect (() => { document.title = "My Portfolio" });



  return (
    <>
    <Box
      position="fixed"
      left={0}
      right={0}
      style={isHidden ? {top: "-200px"} : {top: "0px"}}
      transitionProperty="all"
      transitionDuration="1s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {/* Add social media links based on the `socials` data */}
                <a href={socials[0].url} target="_blank"><FontAwesomeIcon icon={socials[0].icon} size="2x" /></a>
                <a href={socials[1].url} target="_blank"><FontAwesomeIcon icon={socials[1].icon} size="2x" /></a>
                <a href={socials[2].url} target="_blank"><FontAwesomeIcon icon={socials[2].icon} size="2x" /></a>
                <a href={socials[3].url} target="_blank"><FontAwesomeIcon icon={socials[3].icon} size="2x" /></a>
                <a href={socials[4].url} target="_blank"><FontAwesomeIcon icon={socials[4].icon} size="2x" /></a>
           </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href='/#projects' onClick={handleClick('projects')}>Projects</a>
              <a href='/#contact-me' onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    <a href='/#main' onClick={handleClick('main')}>
      <div
            style={{backgroundColor: "white", color: "black", borderColor: "black",
                    borderWidth: "1px", position: "fixed", bottom: "20px", right: "20px",
                  padding: "5px", borderRadius: "7px", fontWeight: "bold"}}><FontAwesomeIcon icon={faArrowUp} size="2x" /><br/>UP</div></a>

    </>
  );
};
export default Header;
