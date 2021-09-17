import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <div>
          <Link to="/" className="title">마인드캐치</Link>
        </div>
        <div>
          <LoginButton>로그인</LoginButton>
        </div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.section`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.color.violet[7]};
`;

const HeaderInnerWrap = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 24px;
  
  .title {
    color: white;
  }
`;

const LoginButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.color.violet[7]};
  border: 2px solid ${({ theme }) => theme.color.violet[7]};
  width: 125px;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.color.violet[7]};
    color: white;
    border: 2px solid white;
  }
`;

export default Header;
