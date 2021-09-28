import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameRoomItem = () => {
  return (
    <GameRoomItemWrap>
      <Link to="/room/1">
        <h2>방 이름</h2>
        <div>게임 상태: 게임중</div>
        <div>방장: 김승환</div>
        <div>인원: 2 / 8</div>
      </Link>
    </GameRoomItemWrap>
  );
};

const GameRoomItemWrap = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  flex: calc(50% - 8px) 0 0;
  padding: 20px;
  cursor: pointer;
`;

export default GameRoomItem;
