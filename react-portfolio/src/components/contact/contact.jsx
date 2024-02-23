import React from 'react';
import { Form as SemanticForm, Input, TextArea, Button } from 'semantic-ui-react';
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
    <div className="Contact" style={{ backgroundColor: '#a1b7b0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '15px' }}>Contact Me</h1>
      <h3 style={{ color: '#df36eef0', marginBottom: '20px' }}>Have any questions? Get in touch</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
          <span>nasiphigee@gmail.com</span>
        </div>
        <div style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '5px' }} />
          <span>Cape Town</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobeAfrica} style={{ marginRight: '5px' }} />
          <span>Available to Freelance</span>
        </div>
      </div>
      <div style={{ width: '300px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(223, 54, 238, 0.9)' }}>
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
      <ReCAPTCHA
        sitekey="6LeWfHopAAAAAGVTvvenBUlf2116LKiTXgovpU7J"
        onChange={handleCaptchaChange}
      />
    </div>
  );
};

export default Contact;
