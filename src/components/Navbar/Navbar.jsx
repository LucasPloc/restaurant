import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={images.gericht} alt='Restaurant logo' />
      </div>
      <ul className={classes.links}>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>{' '}
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>{' '}
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>{' '}
        <li className='p__opensans'>
          <a href='#awards'>Awards</a>
        </li>{' '}
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className={classes.login}>
        <a href='#login' className='p__opensans'>
          Log In / Register
        </a>
        <div />
        <a href='/' className='p__opensans'>
          Book Table
        </a>
      </div>
      <div className={classes['small-screen']}>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => {
            setToogleMenu(true);
          }}
        />
        {toggleMenu && (
          <div
            className={`flex__center slide-bottom ${classes['small-overlay']}`}
          >
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={classes['overlay-close']}
              onClick={() => {
                setToogleMenu(false);
              }}
            />
            <ul className={classes['small-links']}>
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>{' '}
              <li className='p__opensans'>
                <a href='#about'>About</a>
              </li>{' '}
              <li className='p__opensans'>
                <a href='#menu'>Menu</a>
              </li>{' '}
              <li className='p__opensans'>
                <a href='#awards'>Awards</a>
              </li>{' '}
              <li className='p__opensans'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
