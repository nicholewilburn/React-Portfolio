import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
  });

  const validateEmail = (email) => {
    // Regular expression for a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && value.trim() === '') {
      setFormErrors({ ...formErrors, nameError: 'Name is required' });
    } else if (name === 'email' && !validateEmail(value)) {
      setFormErrors({ ...formErrors, emailError: 'Invalid email address' });
    } else {
      setFormErrors({ ...formErrors, [`${name}Error`]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for any remaining errors
    if (formData.name.trim() === '') {
      setFormErrors({ ...formErrors, nameError: 'Name is required' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, emailError: 'Invalid email address' });
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {formErrors.nameError && <div className="error-message">{formErrors.nameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {formErrors.emailError && <div className="error-message">{formErrors.emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;