import PropTypes from 'prop-types';
import React from 'react';

import MarkerSymbol from './Marker.svg';

require('./Marker.css');

const Marker = props => (
  <div className="td-marker">
    <img src={MarkerSymbol} className="td-marker__symbol" />
    <span className="td-marker__title">{props.title}</span>
    {/* <span className="td-marker__text">{props.text}</span> */}
  </div>
);

Marker.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Marker;
