import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import classes from './SpecialMenu.module.css';

const SpecialMenu = () => (
  <div
    className={`flex__center section__padding ${classes['special-menu']}`}
    id='menu'
  >
    <div className={classes.title}>
      <SubHeading title='Menu That Fits Your Needs' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className={classes.menu}>
      <div className={`flex__center ${classes.wine}`}>
        <p className={classes['menu-heading']}>Wine & Beer</p>
        <div className={classes['menu-items']}>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>
      <div className={classes.img}>
        <img src={images.menu} alt='restaurant menu' />
      </div>
      <div className={`flex__center ${classes.cocktails}`}>
        <p className={classes['menu-heading']}>Cocktails</p>
        <div className={classes['menu-items']}>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
