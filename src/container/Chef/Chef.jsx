import { SubHeading } from '../../components';
import { images } from '../../constants';
import classes from './Chef.module.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title={`Chef's Word`} />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className={classes.content}>
        <div className={classes.quote}>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
          </p>
        </div>
        <p className='p__opensans'>
          {' '}
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
      </div>
      <div className={classes.sign}>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
