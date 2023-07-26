import React, { useEffect, useState } from 'react';
import '../style/about.css';




function About() {

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
    <div className={`About-header fade-in ${isMounted ? 'visible' : ''}`}>
      
      <p style={{ fontFamily: 'GolfItalic', fontSize: '40px' }} className="tagline-text">
        I am recent graduate of the Full Stack Development <br></br> 
        Coding Bootcamp through George Washington University. <br></br> 
        I have learned a plethora of development techologies and languages,
        including <br></br> 
        HTML, CSS, JavaScript, SQL, NoSQL (i.e. MongoDB), React, Node.js, Express.js, and more, <br></br>
        with a special affinity for React.
        <br></br> 
        <br></br>
        Please feel free to browse my linked projects, 
        <br></br> and do not hesitate to contact me through my Contact Page.
      </p>
    </div>
    
    
  );
  
}

export default About;