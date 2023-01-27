import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = (props) => {                 //  { title, description, imageSrc }
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
        <div style={{backgroundColor: 'white', borderRadius: '10px', boxShadow: '3px 3px 3px black'}}>
        <Image src={props.imageSrc} boxSize='100%' boxShadow={'3px 3px 3px black'} borderRadius='10px' alt='something' />
        <div style={{padding: '19px'}}>
        <Heading size='sm' color='black' as='b'>{props.title}</Heading>
        <br />
        <br />
        <Text size='sm' color='gray'>{props.description}</Text>
        <br />
        <Text size='sm' color='black' as='b'>See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </div>
        </div>
    </HStack>
  );
};

export default Card;
