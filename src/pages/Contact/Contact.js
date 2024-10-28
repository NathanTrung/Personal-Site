import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab'; // Ensure you're using LoadingButton
import './css/contact.css'; // Ensure you have this CSS file

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true); // Set loading state to true when submitting
    try {
      const response = await fetch('https://formspree.io/f/xqakegzn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm(); // Reset the form after submission
        setOpen(true); // Show success snackbar
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading state to false after response
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Must be 50 characters or less'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    message: Yup.string()
      .required('Message is required')
      .max(500, 'Must be 500 characters or less'),
  });

  return (
    <div className="wrapper bgded overlay">
      <div className="hoc container clear"> 
        <div className="center btmspace-51">
          <Box className="contact-form" component={Formik}
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <h4 style={{ marginTop: "100px" }}>Contact Me</h4>
                <div className="my-story">
      <p>
      If you have any questions, inquiries, or opportunities for collaboration, feel free to reach out!<br></br> I'm always open to connecting with others who share my passion for technology and development.<br></br> You can contact me via email through the form or through my social media profiles.
      </p>
    </div>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input-field"
                    style={{ marginTop: "20px" }}
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    style={{ marginTop: "20px" }}
                  />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    className="input-field"
                    style={{ marginTop: "20px", height: "255px" }}
                  />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>
                <LoadingButton 
                  type="submit" 
                  loading={loading} // Keep button visible during loading
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </LoadingButton>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleCloseSnackbar}
                  message="Your message has been sent!"
                  style={{ marginTop: "20px" }}
                />
              </Form>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
