import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';
import { getTrack } from '../../helpers';
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
import useWindowDimensions from '../../utils/customHooks';
import { togglePlaying, playNext, playPrev, updateQueue, resetQueue } from '../../store/actions/playerActions';
import { toggleLyrics } from '../../store/actions/lyricsActions';

const Player = () => {
  const { width } = useWindowDimensions();
  const { playing, current, np } = useSelector(state => state.player);
  const [stream, setStream] = useState("");
  const dispatch = useDispatch();

  const { title, thumb, streamUrl, length } = current;

  let artist, song;
  if (title) {
    [artist, song] = getTrack(title);
  }

  useEffect(() => {
    setStream("")
    streamUrl && fetch(`http://localhost:5000/${streamUrl}`)
      .then(res => res.json())
      .then((data) => setStream(data));
  }, [current, streamUrl])

  useEffect(() => {
    if (stream) {
      if (!playing) {
        document.getElementById("audio").pause()
      } else {
        document.getElementById("audio").play()
      }
    }
  }, [playing, stream])

  useEffect(() => {
    if (np !== 0) {
      dispatch(updateQueue())
    } else {
      dispatch(resetQueue())
    }
  }, [np, dispatch]);

  const songEnd = (e) => {
    setStream("");
    dispatch(playNext())
  }

  const progressBar = () => {
    const player = document.getElementById("audio")

    const current_time = player.currentTime;

    // calculate total length of value
    document.getElementById("end-time").innerHTML = length;

    // calculate current value time
    const currentTime = calculateCurrentValue(current_time);
    document.getElementById("start-time").innerHTML = currentTime;

    const progressbar = document.getElementById('progress');
    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    function seek(event) {
      const percent = event.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  }

  const calculateCurrentValue = (currentTime) => {
    const current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed(),
      current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  }

  return (
    <Fragment>
      {current.streamUrl && <footer className="player">
        {width > 691 && <div className="playing">
          <div>
            <img
              src={thumb}
              alt=""
              height="70"
              width="70"
              className="small--thumb"
            />

            <div className="song">
              {song && <p className="song--title capitalize">{song}</p>}
              {artist && <p className="song--artist capitalize">{artist}</p>}
            </div>
          </div>

          <img src={heart} alt="" className="icon" />
        </div>}
        <div className="sleek--player">
          <div className="controls">
            <img src={shuffle} alt="" className="icon" />
            <img src={prev} alt="" className="icon" onClick={() => dispatch(playPrev())} />
            <div className="play icon" onClick={() => dispatch(togglePlaying())}>
              <img src={playing ? pause : play} alt="" className="play--icon" disabled />
            </div>
            <img src={next} alt="" className="icon" onClick={() => dispatch(playNext())} />
            <img src={repeat} alt="" className="icon" />
          </div>
          {width < 691 ? (
            <div className="song-mobile">
              {song && <p className="song--title capitalize">{song}</p>}
              {song && artist && <div>-</div>}
              {artist && <p className="song--artist capitalize">{artist}</p>}
            </div>
          ) : (
          <div className="progress-indicator">
            <small id="start-time" className="start-time"></small>
            <progress className="progress" id="progress" value="0" max="1"></progress>
            <small id="end-time" className="end-time"></small>
          </div>)}
          {stream && <audio autoPlay onEnded={songEnd} id="audio" onTimeUpdate={progressBar}>
            <source src={`http://localhost:5000${stream.url}`} type="audio/mpeg" />
          </audio>}
        </div>
        {width > 691 && <div className="actions">
          <div>
            <img src={plus} alt="" className="icon" />
            <img src={mic} alt="" className="icon" onClick={() => dispatch(toggleLyrics())}/>
            <img src={volume} alt="" className="icon" />
          </div>
          <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt="" />
          <p>Queue</p>
        </div>}
      </footer>}
    </Fragment>
  )
}

export default Player;