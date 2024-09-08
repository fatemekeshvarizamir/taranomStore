import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import './carousel.css';

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (images.length === 0) return <div>No images available</div>;

  return (
    <div className='main'>
      <div className="slide">
        <button className="prev" onClick={goToPrevSlide}>
          <ChevronLeft />
        </button>
        <img className='imgslideshow' src={images[currentIndex].url} alt={images[currentIndex].caption} />
        <button className="next" onClick={goToNextSlide}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;

// import React from 'react';
// import { Carousel } from 'antd';
// import PropTypes from 'prop-types';

// const SlideShow = ({ images = [] }) => {
//   if (images.length === 0) {
//     return <div>No images available</div>;
//   }

//   return (
//     <Carousel autoplay>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image.url} alt={image.caption} style={{ width: '100%' }} />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// SlideShow.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       caption: PropTypes.string,
//     })
//   ),
// };

// export default SlideShow;
