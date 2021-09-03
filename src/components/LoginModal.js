import React, { useRef, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Context
import { useAuth } from '../context/AuthContext';

const LoginModal = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <>
      {error && <p>{error}</p>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value='demouser@demo.com'
          ref={emailRef}
          placeholder='Enter your Email'
          type='email'
        />
        <input
          ref={passwordRef}
          placeholder='Enter your password'
          value='demoPassword'
          type='password'
        />
        <div className='form__container'>
          <p className='signup__heading'>
            Please use the pre-filled information to access.
          </p>
          <button type='submit' className='signup__button'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginModal;
