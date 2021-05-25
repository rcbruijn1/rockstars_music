import { Redirect, Switch, Route } from 'react-router-dom';
// Core
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { ROUTES } from '../routes/routes';
import { OVERVIEW_PATH } from '../routes/paths';

// Style
import { useAppStyles } from './App.style';

// Assets
import rockstars_logo from '../assets/rockstars_logo.png';

const App = () => {
  const classes = useAppStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar color="transparent" position="static">
        <Toolbar component={Box} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Box display="flex" p={{ xs: 1, md: 3 }}>
            <img width={80} height="100%" alt="rockstars" src={rockstars_logo} />
          </Box>

          <Typography variant="h4" color="secondary">
            Rockstars Music
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        {ROUTES.map(routeProps => <Route {...routeProps} />)}
        <Redirect to={OVERVIEW_PATH} />
      </Switch>
    </div>
  );
}

export default App;
