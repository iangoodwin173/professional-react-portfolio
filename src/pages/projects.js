import React from 'react';
import ImageSlider from '../components/imageSlider';
import galaxyOne from '../images/galaxy1.jpg';
import galaxyTwo from '../images/galaxy2.jpg';
import galaxyThree from '../images/galaxy3.jpg';
import galaxyFour from '../images/galaxy4.jpg';



function Projects() {

    const images = [galaxyOne, galaxyTwo, galaxyThree, galaxyFour];
  return (
    <div className='App-header'>
      <p>Scroll through some of my projects below:</p>
      <ImageSlider images={images}></ImageSlider>
    </div>
  );
}

export default Projects;
