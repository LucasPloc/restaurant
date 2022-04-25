import { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import classes from './Gallery.module.css';

const imagesArray = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className={`flex__center ${classes.gallery}`}>
      <div className={classes.content}>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
      <div className={classes.images}>
        <div className={classes['images-container']} ref={scrollRef}>
          {imagesArray.map((image, index) => (
            <div
              className={`flex__center ${classes['images-card']}`}
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt='gallery' />
              <BsInstagram className={classes['image-icon']} />
            </div>
          ))}
        </div>{' '}
        <div className={classes['images-arrow']}>
          <BsArrowLeftShort
            className={classes['arrow-icon']}
            onClick={() => scroll('left')}
          />{' '}
          <BsArrowRightShort
            className={classes['arrow-icon']}
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
