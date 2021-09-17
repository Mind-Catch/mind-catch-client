import React from 'react';
import GameRoomItem from './GameRoomItem';
import styled from 'styled-components';

const GmaeListComponent = () => {
  return (
    <GameListWrap>
      <h1 className="title">방 목록</h1>
      <GameRoomListWrap>
        {
          Array
            .from({ length: 8 })
            .map(i => {
              return <GameRoomItem key={i} />;
            })
        }
      </GameRoomListWrap>
    </GameListWrap>
  );
};

const GameListWrap = styled.div`
  width: 1440px;
  margin: 50px auto;

  .title {
    color: ${({ theme }) => theme.color.violet[7]};
  }
`;

const GameRoomListWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 16px;
  margin-top: 30px;
`;

export default GmaeListComponent;
