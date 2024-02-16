import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <h2>Contact Me</h2>
        </div>
        <h3 className="contact-title">Have any Questions?</h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICE</h4>
        <div className="row">
          {/* Contact Info Items */}
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me</h4>
            <p>+2771 80 22736</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Home</h4>
            <p>Khayelitsha</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>nasiphigee@gmail.com</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-globe-europe"></i></div>
            <h4>Website</h4>
            <p>www.nasiphi.com</p>
          </div>
          {/* Contact Info Items End */}
        </div>
        <h3 className="contact-title">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title">I'M VERY RESPONSIVE TO MESSAGES</h4>
        {/* Contact Form */}
        <div className="row">
          <div className="contact-form padd-15">
            <form action="https://formspree.io/f/mwkdwwpr" method="POST">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" name="Name" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" name="_replyto" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" name="Subject" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea name="Message" className="form-control" id="" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
              <input type="hidden" name="_next" value="your_thank_you_page.html" />
            </form>
          </div>
        </div>
        {/* Contact Form End */}
      </div>
    </section>
  );
};

export default Contact;
