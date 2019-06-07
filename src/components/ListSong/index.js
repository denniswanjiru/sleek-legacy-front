import React, { Fragment } from 'react';

import plus from '../../assets/icons/plus.svg'
import elipsis from '../../assets/icons/elipsis.svg'
import heart from '../../assets/icons/heart.svg'
import './index.scss'
import useWindowDimensions from '../../utils/customHooks';
import { getTrack } from '../../helpers';

export default ({track}) => {
  const { width } = useWindowDimensions();
  const [artist, song] = getTrack(track.title);

  console.log(track)

  return (
    <div className="card">
      <div className="song">
        <img src={track.thumb} alt="" className="min-avatar"/>
        <h5 className="capitalize">{song}</h5>
      </div>
      <h6 className="capitalize">{artist}</h6>
      {width > 500 && <Fragment>
        <div className="icons">
          <img src={plus} alt=""/>
          <img src={heart} alt=""/>
        </div>
        <span>{track.length}</span>
      </Fragment>}
      {width < 501 && <img className="icon" src={elipsis} alt="" />}
    </div>
  )
}
