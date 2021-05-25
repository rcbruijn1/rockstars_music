import { useState, useEffect } from "react";

// Core
import { useHistory, useLocation } from "react-router-dom";
import { Box, CircularProgress, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { Button, Main } from "../../components";
import { OVERVIEW_ARTISTS_PATH, OVERVIEW_TRACKS_PATH } from "../../routes/paths";

// Icons
import { Check, LibraryAdd } from "@material-ui/icons";

const ArtistPage = ({ match }) => {
  const { artistName } = match.params;

  const history = useHistory();
  const location = useLocation();

  const isActive = path => location.pathname.includes(path);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [artistTracks, setArtistTracks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/songs?artist=${artistName}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.length === 0) history.push(OVERVIEW_ARTISTS_PATH);
          setLoading(false);
          setArtistTracks(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
  }, []);

  return (
    <Box 
      height="calc(100% - 117px)"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box p={{ xs: 3, md: 6 }} width={{ xs: '100%', md: '30%' }}>
        <List disablePadding>
          <ListItem disableGutters>
            <Button 
              fullWidth 
              label={artistName} 
              disabled 
              color="secondary"
              alternativeIcon={<Check fontSize="small" />}
            />
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
        <ListItem divider>
          <Typography color="secondary" variant="h5">
            {artistName}
          </Typography>
        </ListItem>

        {loading && (
        <Box py={10} display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
        )}

        {error && (
        <Box py={10} display="flex" justifyContent="center" alignItems="center">
          <Typography color="secondary">
            Oops.. Something went wrong...
          </Typography>
        </Box>
        )}

        <List>
          {(!loading && !error && artistTracks) && (
            artistTracks.map(track => (
              <ListItem key={track.id}>
                <ListItemText primary={track.name} secondary={track.album} />
                <ListItemSecondaryAction>
                  <IconButton color="secondary" onClick={() => console.log('Add')}>
                    <LibraryAdd />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          )}
        </List>
      </Main>
    </Box>
  );
};

export default ArtistPage;