import PropTypes from 'prop-types';
import React from 'react';

require('./Marker.css');

const Marker = props => <span className="td-marker">{props.text}</span>;

Marker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Marker;
