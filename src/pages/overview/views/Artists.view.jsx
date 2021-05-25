import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';

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
  const location = useLocation();
  const params = queryString.parse(location.search);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [artists, setArtists] = useState([]);
  
  const currentPage = (params && parseInt(params.page, 10)) || 1;

  const handleNewPage = async newPage => {
    history.push({
      search: queryString.stringify({
        page: newPage,
      }),
    });
  };

  useEffect(() => {
    fetch(`http://localhost:4000/artists?_page=${currentPage}&_limit=12`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.length === 0) handleNewPage(1);
          setLoading(false);
          setArtists(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      )
  }, [currentPage]);

  return (
    <Fragment>
      <ListItem divider>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography color="secondary" variant="h5">
            Artists
          </Typography>

          <Box display="flex" alignItems="center">
            <IconButton
              disabled={currentPage === 1} 
              color="secondary"
              size="small"
              onClick={() => handleNewPage(currentPage - 1)}
            >
              <ChevronLeft />
            </IconButton>

            <Typography color="secondary" variant="body2">
              {`Page ${currentPage}`}
            </Typography>

            <IconButton 
              color="secondary"
              size="small"
              onClick={() => handleNewPage(currentPage + 1)}
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