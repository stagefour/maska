import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="main-section"
  >
    <VStack>
    <Avatar size="xl" src="https://i.pravatar.cc/150?img=7"></Avatar> 
    <Heading size="sm">{greeting}</Heading>
    <br />
    <Text fontSize='4xl' as='b'>{bio1}</Text>
    <Text fontSize='4xl' as='b'>{bio2}</Text>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
