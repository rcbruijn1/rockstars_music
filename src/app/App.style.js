import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(theme => ({
  wrapper: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
  },
}))