import React from 'react';
import './index.css';
import { Form, Typography } from 'antd';
import useExampleHooks from 'src/containers/useExampleHooks';
import { KAKAO_AUTH_URL } from '../Shared/OAuth';
import Kakao from '../../img/Kakao.png';
import Google from '../../img/Google.png';

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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
        <Title>Mind Catch</Title>
      </div>
      <div className="form-wrap">
        <Form className="loginForm">
          <h2>Login</h2>
          <div onClick={() => kakaoLogin()} className="center">
            <img src={Kakao} alt="" />
          </div>
          <div className="center">
            <img src={Google} alt="" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default HomeComponent;
