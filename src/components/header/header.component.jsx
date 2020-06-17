import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <div className='option' >
        <a href="http://smp.vin.ua/joomla/"
          target="_blank"
          rel="noopener noreferrer">Соціальна та молодіжна політика на Вінниччині
        </a>
      </div>
      <div className='option'>
        <a href="http://smp.vin.ua/wordpress/"
          target="_blank"
          rel="noopener noreferrer">ОКО IAЦ
        </a>   
      </div>
    </div>
  </div>
);

export default Header;