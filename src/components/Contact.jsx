import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    const { name, phone, email, message } = formData
    if (!name || !phone || !email || !message) {
      setError("All fields are required.")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return false
    }
    setError("")
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessMessage("Form Submitted");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <main id="contact" className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>

      {/* Decorative Images */}
      <img
        src="/assets/images/servicesimg/Footer Vector (1).png"
        alt="Top Right Design"
        className="decorative-img decorative-top"
      />
      <img
        src="/assets/images/servicesimg/Footer Vector.png"
        alt="Bottom Left Design"
        className="decorative-img decorative-bottom"
      />

      <section className="contact-section">
        {/* Intro Section */}
        <article className="contact-intro">
          <p className="intro-text">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V're just a message away.
            <br />
            Let's catch up over coffee.
            <br />
            Great stories always begin with a good conversation
          </p>
        </article>

        {/* Contact Form Section */}
        <section className="contact-form-container">
          <header className="form-header">
            <h1 className="form-title">Join the story</h1>
            <p className="form-subtitle">
              Ready to bring your vision to life? Let's talk.
            </p>
          </header>

          <form
            className="contact-form"
            aria-label="Contact Form"
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label className="form-label">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name?"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label className="form-label">
                <textarea
                  name="message"
                  placeholder="Your message?"
                  rows="4"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
            </div>

            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>

          <footer className="form-footer">
            <p>
              <a href="mailto:vernita@varnanfilms.co.in" className="footer-link">
                vernita@varnanfilms.co.in
              </a>
            </p>
            <span className="footer-separator">|</span>
            <p>
              <a href="tel:+919873684567" className="footer-link">
                +91 9873684567
              </a>
            </p>
          </footer>
        </section>
      </section>
    </main>
  )
}

export default Contact