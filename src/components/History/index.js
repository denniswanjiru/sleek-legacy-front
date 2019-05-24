import React from 'react'

import plus from '../../assets/icons/plus.svg'
import heart from '../../assets/icons/heart.svg'
import './index.scss'

export default function History() {
  return (
    <div className="card">
      <div className="song">
        <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt="" className="min-avatar"/>
        <h5>Taki Taki</h5>
      </div>
      <h6>Dj Snake</h6>
      <div className="icons">
        <img src={plus} alt=""/>
        <img src={heart} alt=""/>
      </div>
      <span>3:42</span>
    </div>
  )
}
