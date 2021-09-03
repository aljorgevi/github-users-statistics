import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const Login = () => {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
