import PropTypes from 'prop-types';
import clsx from 'clsx';

// Style
import { useMainStyles } from './Main.style';

const Main = ({ children }) => {
  const classes = useMainStyles();

  return (
    <div className={clsx(
      classes.bodyMain,
      classes.scrollbar,
    )}>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;