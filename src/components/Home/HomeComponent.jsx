import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeComponent = () => {
  return (
    <HomeWrap>
      <div>
        <Link to="/roomList">방 목록</Link>
      </div>
    </HomeWrap>
  );
};

const HomeWrap = styled.section`
  width: 1440px;
  margin: 50px auto;
`;

export default HomeComponent;
