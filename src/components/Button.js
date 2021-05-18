import React from 'react';
import '../css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='nav-btn'>Sign Up</button>
    </Link>
  );
}
