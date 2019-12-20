import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Display = (props) => {
  return (
    <div data-testid="app-display" className="display">
      <h1>
        {props.dateTime}
      </h1>
    </div>
  );
};

Display.propTypes = {
  dateTime: PropTypes.string,
};

Display.defaultProps = {
  // dateTime: new Date().toISOString(),
};
 
export default Display;