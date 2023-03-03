import React, { createContext, useState } from 'react';

export const NavContext = createContext({
  isNavOpen: false,
  toggleNav: () => {},
});

const NavProvider = ({ children }) => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
