// Core
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ButtonBase } from "@material-ui/core";

// Icons
import { FastForward } from "@material-ui/icons";

// Style
import { useButtonStyles } from './Button.style';

const Button = ({ handleClick, label, color, alternativeIcon, fullWidth, ...rest }) => {
  const classes = useButtonStyles({ color });

  return (
    <ButtonBase
      className={clsx(
        classes.buttonRoot,
        { [classes.buttonFullWidth]: fullWidth },
      )}
      onClick={handleClick}
      {...rest}
    >
      <span className={classes.buttonLabel}>
        {label}
      </span>
      <span className={classes.buttonIcon}>
        {alternativeIcon ? (
          alternativeIcon
        ) : (
          <FastForward fontSize="small" />
        )}
      </span>
    </ButtonBase>
  )
};

Button.defaultProps = {
  color: 'secondary',
};

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  color: PropTypes.PropTypes.oneOf(['primary', 'secondary']),
  alternativeIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
};

export default Button;