import React from 'react'
import './index.scss';
import { getTrack } from '../../helpers';

import more from '../../assets/icons/more.svg';
import mic from '../../assets/icons/mic.svg';
import plus from '../../assets/icons/plus.svg';
import heart from '../../assets/icons/heart.svg';
import useWindowDimensions from '../../utils/customHooks';

export default function SearchResult({ track, handleClick }) {
  const [artist, song] = getTrack(track.title);
  const { width } = useWindowDimensions();

  return (
    <div className="row" onClick={handleClick}>
      <div className="song">
        <img className="banner" src={track.thumb} alt="" />
        {width > 691 && <img className="icon" src={heart} alt="" />}
        <p className="capitalize">{song ? song : artist}</p>
      </div>
      {width > 691 && <div className="icons">
        <img className="icon" src={mic} alt="" />
        <img className="icon" src={plus} alt="" />
        <img className="icon" src={more} alt="" />
      </div>}
      <p className="capitalize">{song ? artist : 'Unknown Artist'}</p>
      {width > 691 && <span>{track.length}</span>}
    </div>
  )
}
