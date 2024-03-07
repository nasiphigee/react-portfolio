import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './contact.css';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

const SERVICE_ID = 'service_cxd54nh';
const TEMPLATE_ID = 'template_jw0smhn';
const USER_ID = 'Kj7Uk0maFyOQUt4BZ';

const Contact = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(value !== null);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      Swal.fire({
        icon: 'error',
        title: 'Please complete the reCAPTCHA challenge',
      });
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          });
        }
      );
    e.target.reset();
    setIsCaptchaVerified(false); // Reset captcha verification status after form submission
  };

  return (
    <div id="contact" className="Contact">
      <h1>Contact Me</h1>
      <div>
        <div>
        <div class="loader1"></div>          
        <span>nasiphigee@gmail.com</span>
        </div>
        <div style={{ marginRight: '20px' }}>
        <div class="loader"></div>
          <span>Cape Town</span>
        </div>
        <div>
        <div id="wifi-loader">
    <svg class="circle-outer" viewBox="0 0 86 86">
        <circle class="back" cx="43" cy="43" r="40"></circle>
        <circle class="front" cx="43" cy="43" r="40"></circle>
        <circle class="new" cx="43" cy="43" r="40"></circle>
    </svg>
    <svg class="circle-middle" viewBox="0 0 60 60">
        <circle class="back" cx="30" cy="30" r="27"></circle>
        <circle class="front" cx="30" cy="30" r="27"></circle>
    </svg>
    <svg class="circle-inner" viewBox="0 0 34 34">
        <circle class="back" cx="17" cy="17" r="14"></circle>
        <circle class="front" cx="17" cy="17" r="14"></circle>
    </svg>
    <div class="text" data-text=""></div>
</div>
          <span>Available to Freelance</span>
        </div>
      </div>
      <div>
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='message'
            placeholder='Message…'
            required
          />
          <Button type='submit' color='green' disabled={!isCaptchaVerified}>
            Submit
          </Button>
        </Form>
      </div>
    <div className='captcha'>
    <ReCAPTCHA
      sitekey="6LeWfHopAAAAAGVTvvenBUlf2116LKiTXgovpU7J"
      onChange={handleCaptchaChange}
    />
    </div>
    </div>
  );
};

export default Contact;
