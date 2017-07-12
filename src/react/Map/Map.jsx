import PropTypes from 'prop-types';
import React from 'react';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = props => (
  <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyApjk_AdVABnyN0PWIjr52lx5Gg_GZRMgc' }} defaultCenter={props.center} defaultZoom={props.zoom}>
    <AnyReactComponent lat={54.5189} lng={18.5305} text={'Gdynia'} />
  </GoogleMap>
);

Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: { lat: 54.5189, lng: 18.5305 },
  zoom: 14,
};

export default Map;
