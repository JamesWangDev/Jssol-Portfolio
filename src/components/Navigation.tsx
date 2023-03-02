import React, { useContext } from 'react';
import Link from 'next/link';
import { NavContext } from './NavContext';

const navLinks = [
  {
    name: 'Hello',
    link: '/hello',
  },
  {
    name: 'Portfolio',
    link: '/portfolio',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

function Navigation() {
  const { toggleNav, isNavOpen } = useContext(NavContext);

  const handleClick = () => {
    toggleNav();
  };

  return (
    <nav className={`navigation ${isNavOpen ? "nav_open" : ""}`}>
      <button type='button' className='navbutton' aria-label='Mobile navigation button' onClick={handleClick}>
        <span className='hamburger' />
      </button>
      <section className='mobile'>
        <ul className='navlist'>
          {
            navLinks.map((item, idx) => (
              <li key={item.name} className='navlist_item' onClick={handleClick}>
                <span className='navlist_item_index'>{`0${idx + 1}`}</span>
                <Link className='navlist_item_link' href={item.link}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </section>
      <section className='desktop'>
        <ul className='navlist'>
           {
            navLinks.map((item) => (
              <li key={item.name} className='navlist_item'>
                <Link className='navlist_item_link' href={item.link}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navigation;
