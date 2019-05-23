import React from 'react'
import { NavLink } from "react-router-dom";

import search from '../../assets/icons/search.svg';
import headphones from '../../assets/icons/headphones.svg';
import folder from '../../assets/icons/folder.svg';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/heart.svg';
import playlist from '../../assets/icons/play-circle.svg';
import cast from '../../assets/icons/cast.svg';
import grid from '../../assets/icons/grid.svg';

import './index.scss'

export default function Sidebar() {
  return (
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
  )
}
