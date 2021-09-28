import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInnerWrap>
        <div>푸터</div>
      </FooterInnerWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.section`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.gray[9]};
  color: white;
`;

const FooterInnerWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
`;

export default Footer;
