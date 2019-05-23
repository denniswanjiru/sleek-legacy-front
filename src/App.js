import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Player from './components/Player';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Content />
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
