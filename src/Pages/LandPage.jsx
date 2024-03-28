// Navbar.js
import React, { useState } from 'react'; // Import useState hook
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/react.svg';
import { useTheme } from '../ThemeProvider';
import { lightTheme, darkTheme } from '../themeColors'; // Import theme colors
import '../Styles/LandPage.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const { isDarkMode, toggleTheme } = useTheme(); // Access theme state and toggle function

  const theme = isDarkMode ? darkTheme : lightTheme; // Choose theme based on dark mode

  return (
    <div className='header' style={{ background: theme.background, color: theme.text }}>
      <nav className='navbar'>
        <div className='divname'>
          <a href='/' className='logo'>
            <img src={logo} alt='logo' />
          </a>
          <div className='logo-gap'>
            <h3 className='myname'>Fanal</h3>
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme} // Use toggleTheme directly here
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className='lephare' onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: theme.text }} />
          ) : (
            <FaBars size={30} style={{ color: theme.text }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>About</a>
          </li>
          <li className='nav-item'>
            <a href='#skills' onClick={closeMenu}>Skills</a>
          </li>
          <li className='nav-item'>
            <a href='#projects' onClick={closeMenu}>Projects</a>
          </li>
          <li className='nav-item'>
            <a href='#contact' onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
