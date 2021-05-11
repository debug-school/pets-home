import React, { useState } from 'react';

import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li >
          <Link
            className="dropdown-link"
            to="/foods"
            onClick={() => setClick(false)}
          >
            Pet Foods
          </Link>
        </li>
        <li >
          <Link
            className="dropdown-link"
            to="/medicines"
            onClick={() => setClick(false)}
          >
            Pet Medicines
          </Link>
        </li>

      </ul>
    </>
  );
}

export default Dropdown;
