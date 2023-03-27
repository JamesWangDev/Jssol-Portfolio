import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import navLinks from '@/utils/navLinks';
import TextAnimation from './TextAnimation';
import { NavContext } from './NavContext';

const Navigation: React.FC<any> = () => {
  const { toggleNav, isNavOpen } = useContext(NavContext);
  const router = useRouter();

  const handleHashChange = (hash: string) => {
    const links = document.getElementById('desktop_nav')?.getElementsByClassName('navlist_item_link') || [];
    for (let i = 0; i < links?.length; i += 1) {
      if (hash.slice(2) === links[i].textContent?.toLowerCase()) {
        links[i].parentElement?.classList.add('in_view');
      } else {
        links[i].parentElement?.classList.remove('in_view');
      }
    }
  };

  useEffect(() => {
    router.events.on('hashChangeStart', handleHashChange);

    return () => {
      router.events.off('hashChangeStart', handleHashChange);
    };
  }, [router.events]);

  const handleClick = () => {
    toggleNav();
  };

  return (
    <>
      <nav className={`navigation ${isNavOpen ? 'nav_open' : ''}`}>
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
          <TextAnimation type="fade_right" className="blob" delay={0} />
        </section>
      </nav>
      <section id='desktop_nav' className='desktop_nav'>
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
    </>
  );
};

export default Navigation;
