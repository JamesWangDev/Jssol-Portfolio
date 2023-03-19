import React, { createContext, useState } from 'react';

export const NavContext = createContext({
  isNavOpen: false,
  toggleNav: () => {},
});

interface Props {
  children: React.ReactNode;
}

const NavProvider: React.FC<Props> = ({ children }) => {
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
