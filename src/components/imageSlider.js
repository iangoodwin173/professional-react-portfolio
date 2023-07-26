import React from 'react';
import '../style/imageSlider.css';

class ImageSlider extends React.Component {
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
    const { images } = this.props;

    return (
      <div className="image-slider">
        <div className="image-container">
          <img
            src={images[currentIndex]}
            alt={`${currentIndex + 1}`}
            className="image"
          />
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