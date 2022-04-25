import SubHeading from '../SubHeading/SubHeading';
import classes from './Newsletter.module.css';

const Newsletter = () => (
  <div className={classes.newsletter}>
    <div className={classes.heading}>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest updates!</p>
    </div>
    <div className={`flex__center ${classes.input}`}>
      <input type='email' placeholder='Enter your email address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
