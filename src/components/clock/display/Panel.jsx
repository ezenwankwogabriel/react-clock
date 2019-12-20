import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => {
  return ( 
    <div>
      <label id="date-switch" className="switch">
        <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
        <span className="slider round"></span>
      </label>
      <label className="panel-switch-text" htmlFor="date-switch">
        <i className="fa fa-calendar"></i>
      </label>
    </div>
  );
};

Panel.propTypes = {
  toggleDate: PropTypes.string,
  dateOn: PropTypes.bool,
};
 
export default Panel;