import React, { useState, useEffect } from 'react';

import menu from '../../assets/icons/menu.svg';
import bell from '../../assets/icons/bell.svg';
import search from '../../assets/icons/search.svg';
import './index.scss'
import useWindowDimensions from '../../utils/customHooks';

export default function Header() {
  const { height, width } = useWindowDimensions();

  return (
    <header>
      <nav>
        {width < 691 && <img className="icon" src={menu} alt=""/>}
        <div className="search-input">
          <img src={search} alt=""/>
          <input className="search" placeholder="Search"/>
        </div>
        <div className="account">
          <img src={bell} className="notify" alt=""/>
          {width > 690 && <img src="https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50" alt="Avatar" className="avatar" />}
        </div>
      </nav>
    </header>
  )
}
