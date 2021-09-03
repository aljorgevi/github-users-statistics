import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <Container>
      <article className='contact-form'>
        <h3>Sign Up</h3>
        <form>
          <div className='form-group'>
            <input className='form-control' type='email' placeholder='email' />
            <input
              className='form-control'
              type='password'
              placeholder='password'
            />
            <input
              className='form-control'
              type='password'
              placeholder='confirm password'
            />
            <button className='btn submit-btn'>Submit</button>
          </div>
        </form>
        <div className='login'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </article>
    </Container>
  );
};

const Container = styled.div`
  .login {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
  z-index: 2;
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 50vw;
    max-width: 35rem;
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    h3 {
      padding-top: 1.25rem;
      color: var(--clr-grey-5);
    }
  }

  .form-group {
    padding: 1rem 1.5rem;
  }

  .form-control {
    line-height: 40px;
    height: 40px;
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    margin-bottom: 0.725rem;
    background: var(--grey-100);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    &:focus {
      border: 3px solid #0075ff;
      outline: 0px !important;
      -webkit-appearance: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
    &:active {
      opacity: 0.8;
      border: 1px solid #ccc;
    }
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--grey-600);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .error {
    text-align: left;
    margin-top: -8px;
    margin-bottom: 0.5rem;
    font-size: 12px;
    color: #bb2929;
  }
`;

export default ContactForm;
