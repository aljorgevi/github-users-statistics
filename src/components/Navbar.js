import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';
// Context
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError('');

    try {
      await logout();
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <Wrapper className='section'>
      <div className='section-center nav-center'>
        <div className='user-center'>
          {currentUser && <MdAccountCircle className='icon' />}
          {currentUser && (
            <h4>
              Welcome, <strong>{currentUser.email.toUpperCase()}</strong>
            </h4>
          )}
        </div>

        <div className='buttons-center'>
          {currentUser ? (
            <button className='btn-login' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className='btn-login' to='/login'>
              login
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);

  .nav-center {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  .user-center {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .icon {
    font-size: 2rem;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }

  .btn-login {
    background: transparent;
    border: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
