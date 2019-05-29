import React, { Fragment } from 'react';

import plus from '../../assets/icons/plus.svg'
import elipsis from '../../assets/icons/elipsis.svg'
import heart from '../../assets/icons/heart.svg'
import './index.scss'
import useWindowDimensions from '../../utils/customHooks';

export default function History() {
  const { width } = useWindowDimensions();

  return (
    <div className="card">
      <div className="song">
        <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt="" className="min-avatar"/>
        <h5>Taki Taki</h5>
      </div>
      <h6>Dj Snake</h6>
      {width > 500 && <Fragment>
        <div className="icons">
          <img src={plus} alt=""/>
          <img src={heart} alt=""/>
        </div>
        <span>3:42</span>
      </Fragment>}
      {width < 501 && <img className="icon" src={elipsis} alt="" />}
    </div>
  )
}
