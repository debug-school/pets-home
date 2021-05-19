import React from 'react';
import "../../css/contactUs.css";

const ContactUs =()=> {
  return(
	<div className="contact-section">

	  <h1>Contact Us</h1>
	  <div className="border"></div>
	  <form className="contact-form" method="post">
	    <input type="text" className="contact-form-text" placeholder="Your name"/>
	    <input type="email" className="contact-form-text" placeholder="Your email"/>
	    <input type="text" className="contact-form-text" placeholder="Your phone"/>
	    <textarea className="contact-form-text" placeholder="Your message"></textarea>
	    <input type="submit" className="contact-form-btn" value="Send"/>
	  </form>
	</div>
	)
}
export default ContactUs;