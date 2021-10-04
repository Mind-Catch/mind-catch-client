import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const BASE_COLOR = 'black';

const GameRoomContent = () => {
  /* 그림 그리는 기능 */
  // canvas state
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  // 마우스가 캔버스 위에서 눌러지고 있는가?
  let painting = false;

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      ctx.current.strokeStyle = BASE_COLOR;
    }
  }, []);

  const startPainting = () => {
    painting = true;
  };

  const stopPainting = () => {
    painting = false;
  };

  // 캔버스 위에 선 그려지는 로직
  const onMouseMove = ({ nativeEvent }) => {
    // const paintData = [];
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!ctx.current) return;

    if (!painting) {
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    } else if (painting) {
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
  };

  // 펜 색상 선택
  const ColorSelect = ({ nativeEvent }) => {
    const color = nativeEvent.target.style.backgroundColor;
    ctx.current.strokeStyle = color;
  };

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
          <canvas
            ref={canvasRef}
            width={1030}
            height={620}
            onMouseMove={onMouseMove}
            onMouseDown={startPainting}
            onMouseUp={stopPainting}
            onMouseLeave={stopPainting}
          >
          </canvas>
          <PaletteWrap>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#FF3B30' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#FF9500' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#FFCC00' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#4cD963' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#0579FF' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: 'teal' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#8b00ff' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: '#2c2c2c' }}></div>
            <div className="circle" onClick={ColorSelect} style={{ backgroundColor: 'white' }}></div>
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
