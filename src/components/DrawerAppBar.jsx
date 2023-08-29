import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import './Styles/DrawerAppBar.css'

const pages = ['About Me', 'Projects', 'Contact Me'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='root'>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl"  >
          <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 60 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.5em'
              }}
            >
              Marco Mata FrontEnd Developer
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                fontSize= '55'
              >
                <MenuIcon />
              </IconButton>
              <Menu /* movil menu */
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (/////
                  <MenuItem key={page} onClick={() => {
                    handleCloseNavMenu();
                    const section = page.toLowerCase().replace(' ', '');
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: 25, alignItems: 'center' }} />
            <Typography
              variant="h5"
              textAlign='center'
              Wrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.2em'
              }}
            >
              Marco Mata FrontEnd Developer
            </Typography>

            <Box className='buttons__container' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', zIndex: 'tooltip', margin: 9 } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    const section = page.toLowerCase().replace(' ', '');
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '14px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default ResponsiveAppBar;