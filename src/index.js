import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Core
import { App } from './app';
import { createTheme } from './theme/theme.index';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <ThemeProvider theme={createTheme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
