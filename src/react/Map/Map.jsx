import PropTypes from 'prop-types';
import React from 'react';
import GoogleMap from 'google-map-react';

import SimpleMarker from '../Markers/SimpleMarker.jsx';
import ClusterMarker from '../Markers/ClusterMarker.jsx';

const MarkerHOC = ({ title, text }) => <SimpleMarker title={title} text={text} />;

const Map = props => {
  const markers = props.mapData.markers;
  const markersIds = props.mapData.markersIds;
  return (
    <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyApjk_AdVABnyN0PWIjr52lx5Gg_GZRMgc' }} defaultCenter={props.mapData.center} defaultZoom={props.mapData.zoom}>
      {markersIds.map(markerId => {
        const marker = markers[markerId];
        return <MarkerHOC key={marker.id} lat={marker.lat} lng={marker.lng} title={marker.title} text={marker.text} />;
      })}
    </GoogleMap>
  );
};

Map.propTypes = {
  mapData: PropTypes.object.isRequired,
};

Map.defaultProps = {};

export default Map;
