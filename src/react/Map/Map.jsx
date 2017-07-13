import PropTypes from 'prop-types';
import React from 'react';
import GoogleMap from 'google-map-react';

import SimpleMarker from '../Markers/SimpleMarker.jsx';
import ClusterMarker from '../Markers/ClusterMarker.jsx';

const MarkerHOC = ({ title, text }) => <SimpleMarker title={title} text={text} />;

const Map = ({ mapData, options }) => {
  const markers = mapData.markers;
  const markersIds = mapData.markersIds;
  return (
    <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyApjk_AdVABnyN0PWIjr52lx5Gg_GZRMgc' }} defaultCenter={mapData.center} defaultZoom={mapData.zoom} options={options}>
      {markersIds.map(markerId => {
        const marker = markers[markerId];
        return <MarkerHOC key={marker.id} lat={marker.lat} lng={marker.lng} title={marker.title} text={marker.text} />;
      })}
    </GoogleMap>
  );
};

Map.propTypes = {
  mapData: PropTypes.object.isRequired,
  options: PropTypes.object,
};

Map.defaultProps = {
  options: {
    minZoom: 6,
    maxZoom: 20,
  },
};

export default Map;
