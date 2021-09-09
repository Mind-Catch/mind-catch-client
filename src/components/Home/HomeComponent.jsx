import React from 'react';
import useExampleHooks from 'src/containers/useExampleHooks';

const HomeComponent = () => {
  const example = useExampleHooks();
  return (
    <>
      <div>
        { example.value }
      </div>
      <div>
        { example.temp }
      </div>
    </>
  );
};

export default HomeComponent;
