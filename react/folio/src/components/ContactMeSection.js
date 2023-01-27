import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const buttonText = "Submit";

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: '',
    },
    onSubmit: (values) => { 
      console.log (submit);
      if (Math.random() > 0.5) {
      formik.resetForm();
      onOpen ('success', `Thanks for your submission ${values.firstName}, we will get to you shortly!`) }
      else { onOpen ('failure', 'Something went wrong, please try again later') };
     },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid e-mail address")
        .required("Required"),
      firstName: Yup.string()
        .required("Required"),
      comment: Yup.string()
        .min(25, "Too short - please enter min. 25 characters")
        .required("Required")
    }), 
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => { e.preventDefault(); 
            formik.handleSubmit(e) }}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>
                    {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormErrorMessage>
                    {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                                  onChange={formik.handleChange}
                                  value={formik.values.type}>
                  <option value="hireMe" style={{color: "black"}}>Freelance project proposal</option>
                  <option value="openSource" style={{color: "black"}}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{color: "black"}}>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage>
                      {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {buttonText}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
