import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Pet's Home
          <i class="fas fa-cat"></i>
        </Link>

        <div className='menu-icon fa-bars' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/shops'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Shops <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/vet-clinics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Vet Clinics
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/pet-forum'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pet Forum
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/cart'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cart
              <i class="fas fa-cart-plus"></i>
            </Link>
          </li>

        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
