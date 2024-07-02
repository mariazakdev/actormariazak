import React, { useState } from 'react';
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
    
    const mailtoLink = `mailto:mzakart@gmail.com?subject=Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: 'your name',
      email: 'your email',
      message: ''
    });
    setSubmitted(true);
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
