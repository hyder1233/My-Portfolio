import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
    const my_email='bilalhyder1233@gmail.com';
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (!name || !email|| !message) {
            toast.error('Please fill in all required fields.', false);
            return;
        }

        try {
            const mailtoLink = `mailto:${my_email}?body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            window.location.href = mailtoLink;
            // Show success message
            toast.success('Message sent successfully!', true);
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            // Show error message if sending email failed
            toast.error(`Failed to send message. Please try again later. ${error}`, false);
        }
    };
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      
      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required data-form-input />

            <input type="email" name="email" className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" value={message}
            onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
