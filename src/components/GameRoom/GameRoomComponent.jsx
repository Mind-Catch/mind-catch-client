import React from 'react';
import styled from 'styled-components';
import GameRoomContent from './GameRoomContent';

const GameRoomComponent = () => {
  return (
    <GameRoomWrap>
      <GameRoomContent />
    </GameRoomWrap>
  );
};

const GameRoomWrap = styled.section`
  width: 1440px;
  margin: 50px auto;
`;

export default GameRoomComponent;
