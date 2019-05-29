import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { useSelector, useDispatch } from 'react-redux'

import './index.scss';
import { SEARCH_QUERY } from '../../queries';
import SearchResult from './searchResult';
import { updatePlaylist, updatePlaying, togglePlaying } from '../../store/actions/playerActions';

export default function Search() {
  const query = useSelector(state => state.search.query);
  const current = useSelector(state => state.player.current);
  const dispatch = useDispatch();

  const handleClick = (data, song) => {
    console.log(current)
    if (current.id === song.id) {
      dispatch(togglePlaying())
      return
    }

    dispatch(updatePlaylist({ songs: data.search, name: "search" }))
    dispatch(updatePlaying(song))
  }

  return (
    <section>
      {query ? (<Query query={SEARCH_QUERY} variables={{ q: query }}>
        {({ loading, data, error }) => {
          if (loading) return <div className="search--center">Loading...</div>
          console.log(data);
          return (
            <Fragment>
              <div className="row">
                <h5>Song</h5>
                <div />
                <h5>Artist</h5>
                <h5>Duration</h5>
                <div />
              </div>
              {data && (
                <Fragment>
                  {data.search.map(track => <SearchResult key={track.id} track={track} handleClick={() => handleClick(data, track)} />)}
                </Fragment>
              )}
            </Fragment>
        )}}
      </Query>) : (
        <div className="search--center">
          <div>
            <h2>Search Sleek</h2>
            <p>Find your favorite songs, artists and playlists</p>
          </div>
        </div>
      )}
    </section>
  )
}
