
import './BookTable.css';
import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from "@chakra-ui/react";
import * as Yup from 'yup';

export default function BookTable () {

  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const [yourName, setYourName] = useState ('');
  const [startDate, setStartDate] = useState(new Date());

    const formik = useFormik({
        initialValues: {
          firstName: '',
          email: '',
          date: '2023-03-31',
          hour: '18:00',
          guests: 1,
          occasion: 'none',
          comment: 'none',
        },
        onSubmit: (values) => {
          formik.values.date = startDate.toLocaleDateString();
          console.log (values);
          setYourName (values.firstName);
          setIsOpen(true);
          formik.resetForm();
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Invalid e-mail address")
            .required("Required"),
          firstName: Yup.string()
            .required("Required"),
          comment: Yup.string()
            .min(4, "It's too short, if none - please enter none")
            .required("Required")
        }), 
      });
    


    return ( 
      <>
      <div className='bookDiv'>

        <VStack w="100%" p={3} alignItems="flex-start">
        <Heading as="h1">
          Table Booking
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => { e.preventDefault();
            formik.handleSubmit(e) }}>

      <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent py={4} backgroundColor={'#81C784'}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {'Thank you!'}
              </AlertDialogHeader>
              <AlertDialogBody>{'Thanks for your booking ' + yourName + ', you will get the confirmation on your e-mail soon!'}</AlertDialogBody>
              <AlertDialogCloseButton />
            </AlertDialogContent>
          </AlertDialogOverlay>
      </AlertDialog>
  
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

              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
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
                <FormLabel htmlFor="guests">Number of guests: {formik.values.guests}</FormLabel>
                  <input
                        id="guests"
                        name="guests"
                        type="range"
                        min="1"
                        max="8"
                        value={formik.values.guests}
                        onChange={formik.handleChange}
                    />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="date">Reservation date:</FormLabel>
                  <DatePicker 
                        id="date"
                        name="date"
                        selected={startDate}
                        minDate={new Date()}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/dd/yyyy"
                  />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="hour">Reservation time</FormLabel>
                <Select id="hour" name="hour"
                                  onChange={formik.handleChange}
                                  value={formik.values.hour}>
                  <option value="17:00" style={{color: "black"}}>17:00</option>
                  <option value="18:00" style={{color: "black"}}>18:00</option>
                  <option value="19:00" style={{color: "black"}}>19:00</option>
                  <option value="20:00" style={{color: "black"}}>20:00</option>
                  <option value="21:00" style={{color: "black"}}>21:00</option>
                  <option value="22:00" style={{color: "black"}}>22:00</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion"
                                  onChange={formik.handleChange}
                                  value={formik.values.occasion}>
                  <option value="birthday" style={{color: "black"}}>birthday</option>
                  <option value="anniversary" style={{color: "black"}}>anniversary</option>
                  <option value="wedding" style={{color: "black"}}>wedding</option>
                  <option value="promotion" style={{color: "black"}}>promotion</option>
                  <option value="bachelor party" style={{color: "black"}}>bachelor party</option>
                  <option value="none" style={{color: "black"}}>no special occasion</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Special requirements</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={100}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
                <FormErrorMessage>
                      {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
          
              <Button type="submit" colorScheme="purple" width="full">
                SUBMIT
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>   
      </div>
      </>
    );
};
