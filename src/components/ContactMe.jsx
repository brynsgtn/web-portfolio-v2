import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import CircularText from './animations/CircularText';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_79ae6y2",
      "template_ejv2yai",
      formData,
      "GwIsHXRkx6Lf4id1w"
    ).then(() => {
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, (error) => {
      alert('Failed to send message, please try again', error.text);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen py-20 xl:px-50 mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h1 className="text-primary-content text-4xl font-bold mb-10 py-5 relative">
        Contact Me
        <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
      </h1>
      <p className="text-primary-content mb-5">Let's connect!</p>

      <div className={`flex flex-col lg:flex-row align-center justify-around transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <div className="mt-5 max-w-xl sm:mt-15 w-full space-y-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            {['fullName', 'email', 'subject'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold leading-6 text-primary-content">
                  {field === 'fullName' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className="mt-2.5">
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success transition-all duration-500"
                  />
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary-content">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-base-200 px-3.5 py-2 text-base text-primary-content outline outline-1 -outline-offset-1 outline-base-300 resize-none placeholder:text-secondary-content/50 focus:outline-2 focus:-outline-offset-2 focus:outline-success transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={sendEmail}
              className="block w-full rounded-md bg-success px-3.5 py-2.5 text-center text-sm font-semibold text-base-100 shadow-sm hover:bg-success/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="w-full ps-auto mt-20 lg:my-auto">
          <CircularText
            text="BRYAN*SUGUITAN*<brynsgtn.dev/>*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}
