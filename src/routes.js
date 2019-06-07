import React from 'react'
import { Switch , Route } from "react-router-dom";
import Content from './components/Content';
import Search from './components/Search';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/search" component={Search} />
      </Switch>
  )
}