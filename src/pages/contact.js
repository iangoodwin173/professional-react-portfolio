import React, { useEffect, useState } from 'react';
import '../style/contact.css';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    // const mailSubject = encodeURIComponent(subject);
    const mailMessage = encodeURIComponent(message);
    let mailtoLink = '';

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      // For mobile devices, open the default mail app
      mailtoLink = `mailto:?body=${mailMessage}`;
    } else {
      // For desktop, let the user choose which mail service to open
      mailtoLink = `mailto:iangoodwin173@gmail.com?body=${mailMessage}`;
    }

    // Open the email client
    window.open(mailtoLink);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay setting isMounted to true to allow the component to render first
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (

    
    <div className={`fade-in ${isMounted ? 'visible' : ''}`}>
        <h2 className='contact-tagline' style={{ fontFamily: 'GolfBoldItalic', fontSize: '75px' }}>Feel free to contact me using the form below:</h2>
    <form onSubmit={handleSubmit}>
      <label style={{ fontFamily: 'GolfBoldItalic', fontSize: '35px' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label style={{ fontFamily: 'GolfBoldItalic', fontSize: '35px' }}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label style={{ fontFamily: 'GolfBoldItalic', fontSize: '35px' }}>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send Email</button>
    </form>
    </div>
  );
};

export default ContactForm;