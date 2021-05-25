import { Fragment, useEffect, useState } from "react";

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
} from "@material-ui/core"

// Icons
import { ChevronLeft, ChevronRight, LibraryAdd } from "@material-ui/icons";

const TracksView = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:4000/songs?_page=${page}&_limit=8`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.length === 0) setPage(1);
          setLoading(false);
          setTracks(result);
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
            Tracks
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
        {(!loading && !error && tracks) && (
          tracks.map(track => (
            <ListItem key={track.id}>
              <ListItemText primary={track.name} secondary={track.artist} />
              <ListItemSecondaryAction>
                <IconButton color="secondary">
                  <LibraryAdd />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>
    </Fragment>
  );
};

export default TracksView;