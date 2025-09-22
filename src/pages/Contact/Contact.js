import { useState } from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../Footer/Footer";
import { IoIosArrowRoundForward, IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    inquiryType: "Pre-sales consulting",
    product: "30021",
    message: "",
    captcha: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.captcha.trim()) newErrors.captcha = "Captcha is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          subject: "",
          name: "",
          email: "",
          inquiryType: "Pre-sales consulting",
          product: "30021",
          message: "",
          captcha: ""
        });
      }, 1500);
    }
  };

  const refreshCaptcha = () => {
    // In a real app, this would fetch a new captcha from the server
    console.log("Refreshing captcha");
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="cont">Contact Us</h1>
            <p className="hero-description-cont">
              We're here to help and answer any questions you might have. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              
              <div className="info-card">
                <div className="info-icon">
                  <IoIosMail />
                </div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>techiso922@gmail.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <IoIosCall />
                </div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>+1 (800) 123-4567</p>
                  <p>Mon-Fri: 9am-6pm EST</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <IoIosPin />
                </div>
                <div className="info-content">
                  <h3>Visit Us</h3>
                  <p>123 Tech Street, Suite 456</p>
                  <p>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="success-message">
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
                    <button 
                      className="btn-primary" 
                      onClick={() => setSubmitSuccess(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={errors.subject ? "error" : ""}
                      />
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={errors.name ? "error" : ""}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={errors.email ? "error" : ""}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inquiryType">Inquiry Type</label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                        >
                          <option value="Pre-sales consulting">Pre-sales consulting</option>
                          <option value="Product related issues">Product related issues</option>
                          <option value="Order related issues">Order related issues</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                        >
                          <option value="30021">StackSentinel for WhatsApp</option>
                          <option value="30050">StackSentinel for TikTok</option>
                          <option value="30048">StackSentinel for Snapchat</option>
                          <option value="30049">StackSentinel for Facebook</option>
                          <option value="30023">StackSentinel WhatsApp Last Seen</option>
                          <option value="30007">StackSentinel Pro</option>
                          <option value="30022">StackSentinel Monisen</option>
                          <option value="10046">StackSentinel</option>
                          <option value="0">Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please write your detailed question here."
                        rows="5"
                        className={errors.message ? "error" : ""}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <div className="form-group captcha-group">
                      <label>Security Verification</label>
                      <div className="captcha-container">
                        <div className="captcha-image">
                          <img 
                            src="https://apis.imyfone.com/api/captcha?t=1755438678400" 
                            alt="Captcha" 
                            onClick={refreshCaptcha}
                          />
                          <button 
                            type="button" 
                            className="refresh-btn"
                            onClick={refreshCaptcha}
                          >
                            Refresh
                          </button>
                        </div>
                        <input
                          type="text"
                          name="captcha"
                          value={formData.captcha}
                          onChange={handleChange}
                          placeholder="Enter the code"
                          maxLength="4"
                          className={errors.captcha ? "error" : ""}
                        />
                      </div>
                      {errors.captcha && <span className="error-message">{errors.captcha}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                      <IoIosArrowRoundForward className="arrow-icon" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;