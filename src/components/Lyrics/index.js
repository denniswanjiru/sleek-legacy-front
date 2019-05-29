import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { useSelector } from 'react-redux';

import { LYRICS_QUERY } from '../../queries';
import './index.scss';

export default () => {
  const { current } = useSelector(state => state.player);

  const { trackId } = current;

  return (
    <Fragment>
      <h3 className="lyrics--title capitalize">LYRICS</h3>
      {trackId && <Query query={LYRICS_QUERY} variables={{ track: trackId }}>
        {({ data, loading, error }) => {
          if (loading) return <p className="is-size-6">Loading...</p>
          if (error) return <p className="is-size-7">Something went wrong. Try again later!</p>
          return <div className="lyrics" dangerouslySetInnerHTML={{ __html: data.lyrics.lyrics }} />
        }}
      </Query>}
    </Fragment>
  )
}