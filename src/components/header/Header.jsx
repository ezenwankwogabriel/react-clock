import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Home = (props) => {
  return (
    <div className="home-bar" data-testid="main-app">
      <div className="favicon">
        <i className="fa fa fa-clock-o fa-3x"></i>
      </div>
      <div className="header">
        <h1 className="title">
          {props.appTitle}
        </h1>
      </div>
    </div>
  );
};

Home.propTypes = {
  time: PropTypes.string,
  appTitle: PropTypes.string,
};

Home.defaultProps = {

};
 
export default Home;
