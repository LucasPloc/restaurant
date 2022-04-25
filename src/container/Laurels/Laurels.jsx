import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import classes from './Laurels.module.css';

const AwardCard = ({ award }) => {
  return (
    <div className={classes['award-card']}>
      <img src={award.imgUrl} alt='award' />
      <div className={classes['card-content']}>
        <p className='p__cormorant' style={{ color: '#DCAA87' }}>
          {award.title}
        </p>{' '}
        <p className='p__cormorant'>{award.subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className={classes.awards}>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
);

export default Laurels;
