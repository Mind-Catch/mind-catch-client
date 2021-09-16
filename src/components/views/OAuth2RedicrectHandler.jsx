import React, { useEffect } from 'react';
function OAuth2RedicrectHandler() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    /* eslint-disable no-console */
    console.log('code', code);
    /* eslint-disable no-console */
  }, []);


  return (
    <div>로딩중입니다.</div>
  );
}
export default OAuth2RedicrectHandler;
