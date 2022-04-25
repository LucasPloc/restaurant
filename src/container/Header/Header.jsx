import { SubHeading } from '../../components';
import images from '../../constants/images';
import classes from './Header.module.css';

const Header = () => (
  <header
    className={`app__wrapper section__padding ${classes.header}`}
    id='home'
  >
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className={classes.title}>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </header>
);

export default Header;
