import { useRef, useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import classes from './Intro.module.css';

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className={classes.video}>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className={`flex__center ${classes.overlay}`}>
        <div onClick={handleVideo} className={`flex__center ${classes.circle}`}>
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
