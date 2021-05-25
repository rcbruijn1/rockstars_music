import { createMuiTheme, fade } from '@material-ui/core/styles';
import raleway from 'typeface-raleway';

// Colors
import { colors } from './colors/colors';

export const createTheme = createMuiTheme({
  palette: {
    ...colors,
  },
  typography: {
    h1: {
      fontSize: 70,
    },
    h2: {
      fontSize: 45,
    },
    h3: {
      fontSize: 32,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    body1: {
      fontSize: 16,
    },
    fontFamily: '"Raleway"',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [raleway],
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: colors.primary.main,
        },
      },
      divider: {
       borderBottomColor: colors.secondary.main,
      },
    },
    MuiListItemText: {
      primary: {
        color: colors.secondary.main,
      },
      secondary: {
        color: fade(colors.secondary.main, 0.44),
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      },
    }
  },
  scrollbar: {
    '&::-webkit-scrollbar': {
      width: 10,
      background: 'rgba(0, 0, 0, 0.12) !important',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.21) !important',
      borderRadius: 2,
    },
  },
  border: (color, width = 1, style = 'solid') => `${width}px ${style} ${color}`,
});
