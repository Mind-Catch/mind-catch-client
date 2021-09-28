import React from 'react';
import Header from 'components/Common/Header';
import GameRoomComponent from 'components/GameRoom/GameRoomComponent';
import Footer from 'components/Common/Footer';

const GameRoom = () => {
  return (
    <>
      <Header />
      <GameRoomComponent />
      <Footer />
    </>
  );
};

export default GameRoom;
