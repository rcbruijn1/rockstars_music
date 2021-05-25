// Core
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Box, List, ListItem, Typography } from "@material-ui/core";
import { Button, Main } from "../../components";
import { OVERVIEW_ARTISTS_PATH, OVERVIEW_PLAYLISTS_PATH, OVERVIEW_TRACKS_PATH } from "../../routes/paths";
import { TracksView, ArtistsView, PlaylistsView } from './views';

// Icons
import { Check } from "@material-ui/icons";

const OverviewPage = () => {
  const history = useHistory();
  const location = useLocation();

  const isActive = path => location.pathname.includes(path);

  return (
    <Box 
      height="calc(100% - 117px)"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box p={{ xs: 3, md: 6 }} width={{ xs: '100%', md: '30%' }}>
        <List disablePadding>
          <ListItem>
            <Typography color="secondary" variant="h5" paragraph>
              My Library
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Button 
              fullWidth 
              label="Tracks" 
              handleClick={() => history.push(OVERVIEW_TRACKS_PATH)} 
              color={isActive(OVERVIEW_TRACKS_PATH) ? 'secondary' : 'primary'}
              alternativeIcon={isActive(OVERVIEW_TRACKS_PATH) && <Check fontSize="small" />}
            />
          </ListItem>
          <ListItem disableGutters>
            <Button 
              fullWidth 
              label="Artists" 
              handleClick={() => history.push(OVERVIEW_ARTISTS_PATH)} 
              color={isActive(OVERVIEW_ARTISTS_PATH) ? 'secondary' : 'primary'}
              alternativeIcon={isActive(OVERVIEW_ARTISTS_PATH) && <Check fontSize="small" />} 
            />
          </ListItem>
          {/* <ListItem disableGutters>
            <Button 
              fullWidth
              disabled
              label="My Playlists" 
              handleClick={() => history.push(OVERVIEW_PLAYLISTS_PATH)} 
              color={isActive(OVERVIEW_PLAYLISTS_PATH) ? 'secondary' : 'primary'}
              alternativeIcon={isActive(OVERVIEW_PLAYLISTS_PATH) && <Check fontSize="small" />} 
            />
          </ListItem> */}
        </List>
      </Box>

      <Main>
        <Switch>
          <Route 
            path={OVERVIEW_TRACKS_PATH}
            exact
            render={() => <TracksView />}
          />
          <Route 
            path={OVERVIEW_ARTISTS_PATH}
            exact
            render={() => <ArtistsView />}
          />
          {/* <Route 
            path={OVERVIEW_PLAYLISTS_PATH}
            exact
            render={() => <PlaylistsView />}
          /> */}
          <Redirect to={OVERVIEW_TRACKS_PATH} />
        </Switch>
      </Main>
    </Box>
  );
};

export default OverviewPage;