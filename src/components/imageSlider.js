import React, { Component } from 'react';
import '../style/imageSlider.css';

class ImageSlider extends Component {
  state = {
    currentIndex: 0,
  };

  // Functions to handle scrolling to the previous and next images
  goToPrevImage = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex === 0 ? this.props.images.length - 1 : prevState.currentIndex - 1,
    }));
  };

  goToNextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const { images, links, projectNames } = this.props; // Add an array of links and texts corresponding to each image

    return (
      <div className="image-slider">
        <div className="image-container">
          <a href={links[currentIndex]} target="_blank" rel="noopener noreferrer">
            {/* Wrap the <img> tag with <a> tag and add target and rel attributes for opening the link in a new tab */}
            <img
              src={images[currentIndex]}
              alt={`${currentIndex + 1}`}
              className="image"
            />
          </a>
          <p className="image-text">{projectNames[currentIndex]}</p>
        </div>
        <button onClick={this.goToPrevImage}>
          Prev
        </button>
        <button onClick={this.goToNextImage}>
          Next
        </button>
      </div>
    );
  }
}

export default ImageSlider;
