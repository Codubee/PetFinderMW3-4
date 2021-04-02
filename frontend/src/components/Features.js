import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../style/Features.css'
import image1 from '../images/frontpage_pets_image2.jpg';
import image2 from '../images/frontpage_connect_with_shelter_image.jpg';

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
];

function Features() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //Go to the next slide
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  //Go to the previous slide
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  //Go to a specific slide
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {
          items.map((item) => {
            return (
              <CarouselItem
                className="carousel-item"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)} //move slide when exiting
                onExited={() => setAnimating(false)} //stop moving slide after exiting
              >
                <img src={item.src} alt={item.altText} className="carousel-item-image" tag="div" />
                <CarouselCaption className="text-white" tag="div" captionText={item.caption} captionHeader={item.header} />
              </CarouselItem>
            );

          })
        }
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>

  );
}

export default Features;