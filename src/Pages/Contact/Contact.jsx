import React, { useState, useEffect } from 'react';

const Contact = () => {
  return (
    <div className='page' id='contact'>
      
      <div className='hero'>
        <div className='hero-header1'>Contact Us</div>
        <div className='text-21-400-resizable'>Questions? We’re here to help.</div>
      </div>
      
      <div id="contact-container">

        <ContactSection1 />

        <div className="vertical-line-1"></div>

        <ContactSection2 />
         
      </div>


    </div>
  );
};

export default Contact;




const ContactSection1 = () => (
  <div id="contact-locations-container">
      <div className="header-40-700-resize">Our Locations</div>
      <div className="text-16-400" style={{ marginTop: '20px' }}>
          Goldschmitt and Associates LLC (G&A) is located in Leesburg, Virginia and headquartered in Reston, Virginia.<br /><br />
          Any questions or inquiries into the company should be directed to our Headquarters in Reston.
      </div>

      <div id="contact-ids-container">
        <div>
          <div className="subheader-17-700">DUNS</div>
          <div className="text-14-400">014735067</div>
        </div>
        
        <div>
          <div className="subheader-17-700">UEI</div>
          <div className="text-14-400">UA16ZXLPQWY6</div>
        </div>
  
        <div>
          <div className="subheader-17-700">Cage Code</div>
          <div className="text-14-400">5SLG2</div>
        </div>
      </div>

      <div className="subheader-14-700" style={{ marginBottom: '10px' }}>Leesburg Office Location</div>

      <div id="google-map-container">
         <iframe
        title="Google Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1013505677563!2d-77.52873348464933!3d39.11525647954096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ef8b43ad98d%3A0x229715de7fd1a28e!2s161%20Fort%20Evans%20Rd%20NE%20%23250%2C%20Leesburg%2C%20VA%2020176%2C%20USA!5e0!3m2!1sen!2sus!4v1696639366142!5m2!1sen!2sus&zoom=20"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </div>
    
  </div>
)


const ContactSection2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

  return (
    <div id="contact-message-container">
      <div className="header-40-700-resize">Send us a message</div>
      <div className="text-16-400" style={{ marginTop: '20px' }}>
        Whether you have a question, want to discuss your requirements, questions, or more, feel free to call us or shoot us a message.
      </div>

      <div id="contact-info-container">
        <div>
          <div className="subheader-17-700">Phone</div>
          <div className="text-14-400">571-440-2740</div>
        </div>

        <div>
          <div className="subheader-17-700">Fax</div>
          <div className="text-14-400">703-964-9895</div>
        </div>
      </div>

      <div id="contact-form">
        <div className="subheader-14-700" style={{ marginTop: '20px' }}>Name</div>
        <input
          type="text"
          className="text-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          autocomplete="off" 
          autofill="off"
        />
  
        <div className="subheader-14-700" style={{ marginTop: '20px' }}>Email</div>
        <input
          type="email"
          className="text-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autocomplete="off" 
          autofill="off"
        />
  
        <div className="subheader-14-700" style={{ marginTop: '20px' }}>Phone Number</div>
        <input
          type="tel"
          className="text-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          autocomplete="off" 
          autofill="off"
        />

        <div className="subheader-14-700" style={{ marginTop: '20px' }}>How can we help?</div>
        <textarea
          style={{ padding: '12px', height: '200px', resize: 'none' }}
          className="text-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows="5"
          autocomplete="off" 
          autofill="off"
        />

        <button className="button-medium-rounded-1">Submit</button>
      </div>
      
    </div>
  );
};