import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import classes from '../styles/classes';

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#EB6909',
      },
      secondary: {
        main: '#462E83',
      },
    },
  });

  return (
    <>
      <Head>
        <title>
          {title ? `dBB Kositas -  ${title}  ` : 'dBB Kositas Tienda Online'}
          {description && (
            <meta name="description" content={description}></meta>
          )}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>dBB Kositas</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Tagura Digital.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
