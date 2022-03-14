/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import { useState } from 'react';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Image from 'components/image';
import Logo from 'components/logo';
import { NavLink } from 'components/link';

import menuItems from './header.data';
import lock from 'assets/images/icons/lock.png';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box
            as="header"
            variant="layout.header"
            className={state.isMobileMenu ? 'is-mobile-menu' : ''}
          >
            <Container>
              <Box sx={styles.headerInner}>
                <h4  sx={styles.logoTitle} ><b>SkeBug Music</b></h4 >
                <Flex
                  as="nav"
                  sx={styles.navbar}
                  className={state.isMobileMenu ? 'navbar active' : 'navbar'}
                >
                  <Box
                    as="ul"
                    sx={styles.navList}
                    className={state.isMobileMenu ? 'active' : ''}
                  >
                    {menuItems.map(({ path, label }, i) => (
                      <li sx={styles.navLi} key={i}>
                        <NavLink
                          path={path}
                          label={label}
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </Box>
                </Flex>
                <Flex sx={styles.buttonGroup}>
                  <Button variant="text" sx={styles.getStarted}>
                    Experimente Grátis
                  </Button>
                </Flex>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      py: [4],
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white',
      },
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        py: ['13px'],
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      },
    },
  },

  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: ['relative', null, null, 'static'],
  },

  logoTitle: {
    color: 'red'
  },

  logo: {
    mr: [null, null, null, null, 30, 12],
  },

  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
    li: {
      display: 'flex',
      alignItems: 'center',
      a: {
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out 0s',
      },
    },
  },

  navList: {
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    '.nav-item': {
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [null, null, null, null, '0 15px'],
    },
    '.active': {
      color: 'primary',
    },

  },

  getStarted: {
    backgroundColor: '#9b0c0c',
    color: '#fff',
    p: ['0 16px'],
    minHeight: 45,
    ml: [6],
    display: ['none', null, null, null, 'flex'],
  },

  login: {
    backgroundColor: 'transparent',
    position: ['absolute', null, null, null, 'static'],
    color: '#fff',
    fontSize: [2],
    fontWeight: 500,
    top: '50%',
    p: 0,
    transform: ['translateY(-50%)', null, null, null, 'none'],
    right: 79,
    border: 0,
    fontFamily: 'body',
    display: 'flex',
    alignItems: 'center',
    outline: 0,
    img: {
      maxWidth: 14,
      mr: 2,
    },
  },
  menuButton: {
    position: 'relative',
    right: '-6px',
    p: 0,
  },
  closeButton: {
    height: '32px',
    padding: '0',
    minHeight: 'auto',
    width: '32px',
    position: 'relative',
    right: '-10px',
    path: {
      stroke: 'text',
    },
  },
};
