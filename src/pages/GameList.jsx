import React from 'react';
import Header from 'components/Common/Header';
import GameListComponent from 'components/GameList/GameListComponent';
import Footer from 'components/Common/Footer';

const GameList = () => {
  return (
    <>
      <Header />
      <GameListComponent />
      <Footer />
    </>
  );
};

export default GameList;
