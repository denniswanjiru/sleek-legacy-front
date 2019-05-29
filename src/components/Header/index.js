import React from 'react';
import  { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import menu from '../../assets/icons/menu.svg';
import bell from '../../assets/icons/bell.svg';
import search from '../../assets/icons/search.svg';
import './index.scss'
import useWindowDimensions from '../../utils/customHooks';
import { searchAction } from '../../store/actions/searchActions';

export default function Header() {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const updateSearch = debounce(e => {
    dispatch(searchAction(e.target.value));
  }, 1000)

  const handleChange = e => {
    e.persist();
    updateSearch(e);
  };

  return (
    <header>
      <nav>
        {width < 691 && <img className="icon" src={menu} alt=""/>}
        <div className="search-input">
          <img src={search} alt=""/>
          <input className="search" placeholder="Search" onChange={handleChange} />
        </div>
        <div className="account">
          <img src={bell} className="notify" alt=""/>
          {width > 690 && <img src="https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50" alt="Avatar" className="avatar" />}
        </div>
      </nav>
    </header>
  )
}
