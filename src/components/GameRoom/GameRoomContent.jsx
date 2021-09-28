import React from 'react';
import styled from 'styled-components';

const GameRoomContent = () => {
  return (
    <GameRoomContentWrap>
      <InfoBoxWrap>
        <Title className="title">방 이름 테스트</Title>
        <Info className="info">
          방인원: 8명 방인원: 8명 방인원: 8명 방인원: 8명
        </Info>
      </InfoBoxWrap>
      <ContentWrap>
        <CanvasWrap>
          <canvas></canvas>
          <PaletteWrap>
            <div className="circle red"></div>
            <div className="circle orange"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
            <div className="circle blue"></div>
            <div className="circle teal"></div>
            <div className="circle purple"></div>
            <div className="circle black"></div>
            <div className="circle white"></div>
          </PaletteWrap>
        </CanvasWrap>
        <ChatWrap>
          <ChatMemberWrap>
            <div>김승환1</div>
            <div>김승환2</div>
            <div>김승환3</div>
            <div>김승환4</div>
            <div>김승환5</div>
            <div>김승환6</div>
          </ChatMemberWrap>
          <ChattingWrap>
            asdf
          </ChattingWrap>
          <ChatSendWrap>
            <input type="text" />
            <SendButton>보내기</SendButton>
          </ChatSendWrap>
        </ChatWrap>
      </ContentWrap>
    </GameRoomContentWrap>
  );
};

const GameRoomContentWrap = styled.div`
  margin: 30px 0;
`;

const InfoBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.violet[3]};
  
  .title ~ .info {
    border-top: 1px solid ${({ theme }) => theme.color.violet[3]};
  }
`;

const Title = styled.h2`
  padding: 10px;
  width: 100%;
  text-align: center;
`;

const Info = styled.div`
  padding: 15px;
  width: 100%;
  text-align: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
`;

const CanvasWrap = styled.div`
  width: 1030px;
  height: 620px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.violet[3]};
  
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const PaletteWrap = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
  }
  
  .circle ~ .circle {
    margin-left: 10px;
  }
`;

const ChatWrap = styled.div`
  width: 400px;
  height: 700px;
  margin-top: 10px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.violet[3]};
  z-index: 99;
`;

const ChatMemberWrap = styled.div`
  height: 150px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.violet[3]};
`;

const ChattingWrap = styled.div`
  height: 510px;
  padding: 10px;
`;

const ChatSendWrap = styled.div`
  display: flex;
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.violet[3]};
  
  input {
    width: 323px;
    height: 37px;
    border-radius: 0;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    
    &:focus {
      outline: 0;
    }
  }
`;

const SendButton = styled.button`
  outline: 0;
  width: 75px;
  height: 37px;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  border-left: 1px solid ${({ theme }) => theme.color.violet[3]};
  cursor: pointer;
  color: ${({ theme }) => theme.color.violet[3]};
  font-size: 16px;
  font-weight: 600;
`;

export default GameRoomContent;
