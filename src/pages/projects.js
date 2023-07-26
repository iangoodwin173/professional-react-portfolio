import React, { useEffect, useState } from 'react';
import ImageSlider from '../components/imageSlider';
import workdayScheduler from '../images/workday-scheduler.png';
import codingQuiz from '../images/coding-quiz.png';
import geoPairing from '../images/geopairing.png';
import pwGenerator from '../images/pw-gen.png';
import '../style/imageSlider.css';




function Projects() {

    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay setting isMounted to true to allow the component to render first
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

    const projectNames = ['Workday Scheduler', 'Coding Quiz', 'Geo-Pairing', 'Password Generator'];
    const images = [workdayScheduler, codingQuiz, geoPairing, pwGenerator];
    const links = ['https://iangoodwin173.github.io/work-day-scheduler/', 'https://iangoodwin173.github.io/coding-quiz/', 'https://geo-pairing-2def7ca5b56b.herokuapp.com/', 'https://iangoodwin173.github.io/JSpassword-generator/'];
  return (
    <div className={`project-header fade-in ${isMounted ? 'visible' : ''}`}>
      <p className='project-tagline' style={{ fontFamily: 'GolfBoldItalic', fontSize: '50px' }}>Scroll through some of my projects below:</p>
      <ImageSlider projectNames={projectNames} images={images} links={links}></ImageSlider>
    </div>
  );
}

export default Projects;
