import React from 'react'
import './index.scss'
import History from '../History';

export default function Content() {
  return (
    <main>
      <div className="recommend">
        <h1 className="section-title">Sleek Recomends</h1>
        <div className="r-flex">
          <div className="song">
            <img className="avatar" src="https://cdn130.picsart.com/279561040034211.png" alt=""/>
            <div className="title">
              <h5>Like me Better</h5>
              <span>3:15</span>
            </div>
            <div className="artist">Lauv</div>
          </div>

          <div className="song">
            <img className="avatar" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg" alt="" />
            <div className="title">
              <h5>Money</h5>
              <span>3:45</span>
            </div>
            <div className="artist">Cardi B</div>
          </div>

          <div className="song">
            <img className="avatar" src="http://www.fab.ng/wp-content/uploads/2018/02/ed-sheeran-press-photo-2-credit-mark-surridge-e1513098926932.jpg" alt="" />
            <div className="title">
              <h5>I Don't Care</h5>
              <span>4:35</span>
            </div>
            <div className="artist">Ed Sheeran</div>
          </div>

          <div className="song">
            <img className="avatar" src="https://www.iamannemarie.com/sites/g/files/g2000006951/f/201710/Annemarie-header-mob.jpg" alt="" />
            <div className="title">
              <h5>2002</h5>
              <span>3:25</span>
            </div>
            <div className="artist">Anne Marie</div>
          </div>

          <div className="song">
            <img className="avatar" src="https://cdn130.picsart.com/279561040034211.png" alt="" />
            <div className="title">
              <h5>Like me Better</h5>
              <span>3:15</span>
            </div>
            <div className="artist">Lauv</div>
          </div>

          <div className="song">
            <img className="avatar" src="http://www.fab.ng/wp-content/uploads/2018/02/ed-sheeran-press-photo-2-credit-mark-surridge-e1513098926932.jpg" alt="" />
            <div className="title">
              <h5>I Don't Care</h5>
              <span>4:35</span>
            </div>
            <div className="artist">Ed Sheeran</div>
          </div>

          <div className="song">
            <img className="avatar" src="https://www.iamannemarie.com/sites/g/files/g2000006951/f/201710/Annemarie-header-mob.jpg" alt="" />
            <div className="title">
              <h5>2002</h5>
              <span>3:25</span>
            </div>
            <div className="artist">Anne Marie</div>
          </div>
        </div>
      </div>
      <div className="history">
        <h1 className="section-title">Recently Played</h1>
        <div className="songlist">
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
        </div>
      </div>
      <div className="flow">
        <h1 className="section-title">Flow</h1>
        <img className="cover" src="https://images.unsplash.com/photo-1534886317787-63ec182818cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
      </div>
    </main>
  )
}
