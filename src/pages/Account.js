import React from 'react';
import styled from 'styled-components';
// COMPONENTS
import LoginModal from '../components/LoginModal';
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/Animations';

export function Account() {
  return (
    <Wrapper
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <LoginModal />
    </Wrapper>
  );
}
export default Account;

const Wrapper = styled(motion.section)`
  position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    max-width: 30rem;
    height: 100vh;
    form {
        width: 100%;
        @include flexColumn;
        align-items: flex-end;
    }
    & *>* {
        margin-bottom: 0.5rem;
    }
    input,
    button {
        font-family: "Archivo", arial, sans-serif;
    }
    input {
        width: 100%;
        padding: 0.75rem;
        border-radius: 10rem;
        outline: none;
        border: none;
        background-color: $neutral90;
        border: 2px solid transparent;
        transition: all 0.4s ease;
        &:focus-within {
            border: 2px solid $brandMain;
            background-color: transparent;
        }
    }
    button {
        width: 8rem;
        padding: 0.5rem 0.75rem;
        border-radius: 10rem;
        outline: none;
        border: 2px solid $brandMain;
        background-color: $brandMain;
        font-weight: 900;
        color: $neutral90;
        transition: all 0.4s ease;
        &:hover {
            opacity: 0.9;
        }
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    p {
        margin-bottom: 0.5rem;
        a {
            color: $brandMain;
            font-family: "Archivo", Arial, sans-serif;
            font-weight: 900;
            transition: all 0.4s ease;
            text-decoration: underline;
            &:hover {
                color: $brandPastel;
            }
        }
    }
}

.signup__button {
    cursor: pointer;
}

.form__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

@media (max-width: 500px) {

        button {
            width: 100%;
        }

`;
