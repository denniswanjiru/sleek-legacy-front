import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import search from '../../assets/icons/search.svg';
import headphones from '../../assets/icons/headphones.svg';
import folder from '../../assets/icons/folder.svg';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/heart.svg';
import playlist from '../../assets/icons/play-circle.svg';
import cast from '../../assets/icons/cast.svg';
import grid from '../../assets/icons/grid.svg';
import Lyrics from '../Lyrics';
import './index.scss'
import { closeLyrics } from '../../store/actions/lyricsActions';

export default function Sidebar() {
  const { show } = useSelector(state => state.lyrics);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <aside>
        <h1 className="brand">Sleek</h1>
        <ul className="links">
          <li className="active">
            <img src={search} alt="" />
            <p>Discover</p>
          </li>

          <li>
            <img src={heart} alt="" />
            <p>Favorites</p>
          </li>

          <li>
            <img src={playlist} alt="" />
            <p>Playlists</p>
          </li>

          <li>
            <img src={headphones} alt="" />
            <p>Songs</p>
          </li>

          <li>
            <img src={folder} alt="" />
            <p>Albums</p>
          </li>

          <li>
            <img src={user} alt="" />
            <p>Artists</p>
          </li>

          <li>
            <img src={cast} alt="" />
            <p>Radio</p>
          </li>

          <li>
            <img src={grid} alt="" />
            <p>Play History</p>
          </li>
        </ul>
      </aside>

      <div className={show ? 'slider' : 'slider close hide'}>
        <button className="cancel" onClick={() => dispatch(closeLyrics())}>Close</button>
        <div className="lyx">
          <Lyrics />
        </div>
      </div>
    </Fragment>
  )
}
