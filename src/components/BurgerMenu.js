import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './BurgerComponents/hooks';
import { GlobalStyles } from './BurgerComponents/global';
import { theme } from './BurgerComponents/theme';
import { Burger, Menu } from './BurgerComponents';
function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <GlobalStyles /> */}
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default BurgerMenu;