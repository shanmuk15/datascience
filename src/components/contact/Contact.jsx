import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css'

export default function ContactSection() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setState({ name: '', email: '', message: '' });
    
    // Reset submission message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>I'm always excited to collaborate on innovative projects. Feel free to reach out!</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send a Message</h2>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows={5}
              />
            </div>

            <button onClick={handleSubmit} className="submit-btn">
              Send Message <Mail size={16} className="icon" />
            </button>
            
            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent.
              </div>
            )}
          </div>
        </div>

        <div className="contact-info-section">
          <h2>Connect With Me</h2>
          
          <div className="social-links">
            <a href="mailto:sowjanya1562003@gmail.com"className="social-link email">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            
            <a href="https://www.linkedin.com/in/sowjanya-bheemavarapu/" className="social-link linkedin">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/Bheemavarapu/Bheemavarapu" className="social-link github">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          
          </div>
        </div>
      </div>
      
      <footer className="contact-footer">
        <p>© All rights Reserved | Rasool Bi</p>
      </footer>
      
   
    </div>
  );
}
