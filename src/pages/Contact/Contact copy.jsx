import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className='contact__container'>
      <h2 className='contact__title'>Contact</h2>
      {submitted ? (
        <div className='contact__thank-you-message'>
          <p>Thank you for your message!</p>
          <button className='contact__button' onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='contact__form-group'>
            <label className='contact__label'>Name:</label>
            <input
              type="text"
              name="name"
              className='contact__input'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='contact__form-group'>
            <label className='contact__label'>Email:</label>
            <input
              type="email"
              name="email"
              className='contact__input'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='contact__form-group'>
            <label className='contact__label'>Message:</label>
            <textarea
              name="message"
              className='contact__textarea'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='contact__button'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
