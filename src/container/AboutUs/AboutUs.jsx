import { images } from '../../constants';
import classes from './AboutUs.module.css';

const AboutUs = () => (
  <div
    className={`app__bg flex__center section__padding ${classes.about}`}
    id='about'
  >
    <div className={`flex__center ${classes.overlay}`}>
      <img src={images.G} alt='g letter' />
    </div>
    <div className={`flex__center ${classes.content}`}>
      <div className={classes.about}>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className={classes.spoon} />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
      <div className={`flex__center ${classes.knife}`}>
        <img src={images.knife} alt='knife' />
      </div>
      <div className={classes.history}>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className={classes.spoon} />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
