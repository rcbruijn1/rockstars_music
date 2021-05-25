import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Core
import { 
  Box, 
  CircularProgress, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  ListItemSecondaryAction 
} from "@material-ui/core";
import { ARTIST_PATH } from "../../../routes/paths";

// Icons
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

const ArtistsView = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:4000/artists?_page=${page}&_limit=12`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.length === 0) setPage(1);
          setLoading(false);
          setArtists(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
  }, [page]);

  return (
    <Fragment>
      <ListItem divider>
        <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Typography color="secondary" variant="h5">
            Artists
          </Typography>

          <Box display="flex" alignItems="center">
            <IconButton
              disabled={page === 1} 
              color="secondary" 
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft />
            </IconButton>

            <Typography color="secondary">
              {`Page ${page}`}
            </Typography>

            <IconButton 
              color="secondary" 
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>
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
        {(!loading && !error && artists) && (
          artists.map(artist => (
            <ListItem key={artist.id} button onClick={() => history.push(ARTIST_PATH(artist.name))}>
              <ListItemText primary={artist.name} />
              <ListItemSecondaryAction>
                <IconButton color="secondary" onClick={() => history.push(ARTIST_PATH(artist.name))}>
                  <ChevronRight />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>
    </Fragment>
  );
};

export default ArtistsView;