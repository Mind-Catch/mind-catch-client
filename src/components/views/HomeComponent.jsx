import React from 'react';
import { Typography } from 'antd';
import useExampleHooks from '../../containers/useExampleHooks';
import { KAKAO_AUTH_URL } from '../Shared/OAuth';
import Kakao from '../../img/Kakao.png';
import Google from '../../img/Google.png';
import styled from 'styled-components';
const { Title } = Typography;

const HomeComponent = () => {
  const example = useExampleHooks();
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <>
      <div>
        { example.value }
      </div>
      <div>
        { example.temp }
      </div>
      <TitleDiv>
        <Title>Mind Catch</Title>
      </TitleDiv>
      <FormWrap>
        <LoginForm>
          <h2>Login</h2>
          <Center onClick={() => kakaoLogin()}>
            <img src={Kakao} alt="" />
          </Center>
          <Center>
            <img src={Google} alt="" />
          </Center>
        </LoginForm>
      </FormWrap>
    </>
  );
};
const TitleDiv = styled.div`
display: flex;
justify-content: center;
marginTop: 5rem;
`;

const FormWrap = styled.div`
border:3px solid black;
border-radius: 1em;
width: 700px;
height: 700px;
position: relative;
margin: 3% auto;
background: #fafcff;
padding: 5px;
`;


const Center = styled.div`
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const LoginForm = styled.h2`
text-align: center;
margin: 30px;
`;


export default HomeComponent;
