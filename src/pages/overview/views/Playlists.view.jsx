import { List, ListItem, Typography } from "@material-ui/core"

const PlaylistsView = () => {
  return (
    <List>
      <ListItem>
        <Typography color="secondary" variant="h5" paragraph>
          Playlists
        </Typography>
      </ListItem>
    </List>
  );
};

export default PlaylistsView;