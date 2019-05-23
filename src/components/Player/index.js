import React, { useEffect, useState } from 'react';

import play from "../../assets/icons/play.svg";
import next from "../../assets/icons/next.svg";
import prev from "../../assets/icons/prev.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import repeat from "../../assets/icons/repeat.svg";
import heart from "../../assets/icons/heart.svg";
import mic from "../../assets/icons/mic.svg";
import volume from "../../assets/icons/volume.svg";
import plus from "../../assets/icons/plus.svg";
import pause from "../../assets/icons/pause.svg";
import './index.scss';

const Player = ({ context }) => {
  return (
    <footer className="player">
      <div className="playing">
        <div>
          <img
            src="http://www.fab.ng/wp-content/uploads/2018/02/ed-sheeran-press-photo-2-credit-mark-surridge-e1513098926932.jpg"
            alt=""
            height="70"
            width="70"
            className="small--thumb"
          />

          <div className="song">
            <p className="song--title">I Don't Care</p>
            <p className="song--artist">Ed Sheeran & Justin</p>
          </div>
        </div>

        <img src={heart} alt="" className="icon" />
      </div>
      <div className="sleek--player">
        <div className="controls">
          <img src={shuffle} alt="" className="icon" />
          <img src={prev} alt="" className="icon" />
          <div className="play icon">
            <img src={play} alt="" className="play--icon" disabled />
          </div>
          <img src={next} alt="" className="icon" />
          <img src={repeat} alt="" className="icon" />
        </div>
        <div className="progress-indicator">
          <small id="start-time" className="start-time"></small>
          <progress className="progress" id="progress" value="0" max="1"></progress>
          <small id="end-time" className="end-time"></small>
        </div>
        {/* {stream && <audio autoPlay onEnded={songEnd} id="audio" onTimeUpdate={progressBar}>
          <source src={`http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>} */}
      </div>
      <div className="actions">
        <div>
          <img src={plus} alt="" className="icon" />
          <img src={mic} alt="" className="icon" />
          <img src={volume} alt="" className="icon" />
        </div>
        <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt="" />
        <p>Queue</p>
      </div>
    </footer>
  )
}

export default Player;