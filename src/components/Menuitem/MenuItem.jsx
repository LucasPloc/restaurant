import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = ({ title, price, tags }) => (
  <div className={classes.item}>
    <div className={classes.head}>
      <div className={classes.name}>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>{' '}
      <div className={classes.dash} />
      <div className={classes.price}>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    <div className={classes.sub}>
      <p className='p__opensans' style={{ color: '#AAA' }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
