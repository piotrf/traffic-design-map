import PropTypes from 'prop-types';
import React from 'react';

import MarkerSymbol from './SimpleMarker.svg';

require('./SimpleMarker.css');

const SimpleMarker = props => (
  <div className="td-marker">
    <img src={MarkerSymbol} className="td-marker__symbol" alt="Traffic Design Item" />
    <span className="td-marker__title">{props.title}</span>
    {/* <span className="td-marker__text">{props.text}</span> */}
  </div>
);

SimpleMarker.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SimpleMarker;
