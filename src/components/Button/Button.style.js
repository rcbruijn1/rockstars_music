import { makeStyles } from '@material-ui/core/styles';

export const useButtonStyles = makeStyles(theme => {
  const getColor = (variant = 'main') => ({ color }) => {
    if (color === 'default' || color === 'inherit') return null;
    return theme.palette[color][variant];
  };

  const getContrast = () => ({ color }) => {
    if (color === 'primary') return theme.palette.common.white;
    if (color === 'secondary') return theme.palette.common.black;
  };

  return ({
    buttonRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      width: 'max-content',
      color: getContrast(),
      backgroundColor: getColor(),
      '&:hover': {
        backgroundColor: getColor('light'),
        '@media (hover: none)': {
          backgroundColor: getColor(),
        },
        '& span:nth-child(2)': {
          transform: 'translateX(5px)',
        }
      },
    },

    buttonFullWidth: {
      width: '100%',
    },

    buttonLabel: {
      textTransform: 'uppercase',
      fontWeight: 600,
      marginRight: theme.spacing(1.5),
    },

    buttonIcon: {
      display: 'flex',
      transition: 'transform 0.3s',
      transitionTimingFunction: 'linear',
    },
  });
});
