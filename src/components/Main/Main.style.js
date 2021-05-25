import { makeStyles } from "@material-ui/core";

export const useMainStyles = makeStyles(theme => ({
  bodyMain: {
    touchAction: 'enable',
    width: '100%',
    height: `calc(100% - ${theme.spacing(12)}px)`,
    overflowY: 'auto',
    padding: theme.spacing(0, 12, 0, 6),
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      margin: theme.spacing(0),
      height: `calc(100% - ${theme.spacing(6)}px)`,
    },
  },

  scrollbar: theme.scrollbar,
}));