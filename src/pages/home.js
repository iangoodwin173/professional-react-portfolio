
import '../App.css';
import '../style/home.css';
import React, { useEffect, useState } from 'react';


function Home() {

    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay setting isMounted to true to allow the component to render first
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const [text, setText] = useState('');
  const fullText = "Hi. I'm a Full-Stack Developer that also enjoys gaming and golfing.";

  useEffect(() => {
    let index = 0;

    // Set the custom property --length to the length of the fullText
    document.documentElement.style.setProperty('--length', fullText.length);

    // Delay the start of the typing animation by one second
    const typingDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index === fullText.length) {
          clearInterval(typingInterval);
        } else {
          setText(fullText.slice(0, index + 1));
          index++;
        }
      }, 50); // Adjust the typing speed by changing the interval duration

      return () => clearInterval(typingInterval);
    }, 1000); // One second delay before starting the typing effect

    return () => {
      clearTimeout(typingDelay);
    };
  }, [fullText]);
  return (
    <div className={`fade-in ${isMounted ? 'visible' : ''}`}>
        
      <h1 style={{ fontFamily: 'GolfBoldItalic', fontSize: '100px' }}className="title-text">Ian Goodwin: Full-Stack Developer</h1>
  
      
      <p style={{ fontFamily: 'GolfItalic', fontSize: '30px' }}className="typing-text">
            {text}
      </p>
    </div>
    
    
  );
}

export default Home;