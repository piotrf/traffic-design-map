import PropTypes from 'prop-types';
import React from 'react';

require('./Marker.css');

const Marker = props => (
  <div className="td-marker">
    <span className="td-marker__title">{props.title}</span>
    {/* <span className="td-marker__text">{props.text}</span> */}
  </div>
);

Marker.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Marker;
