import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser'; 
import './Contact.css';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) return;

   

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_CONF_SERVICE_ID, 
      import.meta.env.VITE_EMAIL_CONF_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAIL_CONF_KEY
    )
    .then(() => {
      setMessageSent(true);
      setLoading(false);
      formRef.current?.reset(); 
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
      setLoading(false);
    });
  };

  return (
    <section id="Contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form ref={formRef} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4" style={{ rowGap: '20px' }}>
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Sending...</div>}
                  {messageSent && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  {error && <div className="error-message">{error}</div>}

                  {/* <button type="submit" disabled={loading}>Send Message</button> */}
                  <button type="submit" disabled={loading} className="submit-btn">
                    {loading ? (
                      <>
                        <span className="spinner"></span> Sending
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
