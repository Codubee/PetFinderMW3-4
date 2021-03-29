import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from '../assets/frontpage_pets_image2.jpg';
import image2 from '../assets/frontpage_connect_with_shelter_image.jpg';

const items = [
  {
    id: 1,
    src: image1,
    altText: 'Slide 1',
    header: 'Find your furry friend!',
    caption: 'Match with a pet by swiping right on the dog cards or keep swiping left until you find the perfect pet for you!'
  },
  {
    id: 2,
    src: image2,
    altText: 'Slide 2',
    header: 'Connect with the animal shelter!',
    caption: 'We will give you all the information about the animal shelter so you can adopt whenever you like!'
   }
   //,
  // {
  //   id: 3,
  //   altText: 'Slide 3',
  
  //   caption: 'Slide 3'
  // }
];

const Features = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)} //move slide when exiting
        onExited={() => setAnimating(false)} //stop moving slide after exiting
      >
        <img src={item.src} alt={item.altText} className="custom-tag-images" tag="div"  />
      <CarouselCaption className="text-white" tag="div" captionText={item.caption} captionHeader={item.header}  />
      </CarouselItem>
    );
    
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 760px;
              background: #E4A58F;
            }`
        }
        {
          `.custom-tag-images {
            margin-left:270px;
            margin-top:25px;
            max-width: 100%;
            height:700px;
          }`
        }
        {/* {
          `.custom-tag-title{
            font-weight:bold;
            font-size: 30px;
          }`
        } */}
      </style>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
    
  );
}

export default Features;