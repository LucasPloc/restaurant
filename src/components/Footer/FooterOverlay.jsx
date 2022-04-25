import React from 'react';

import classes from './FooterOverlay.module.css';

const FooterOverlay = () => (
  <div className={classes.overlay}>
    <div className={classes.black}></div>
    <div className={`app__bg ${classes.img}`}></div>
  </div>
);

export default FooterOverlay;
