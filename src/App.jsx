// import PropTypes from 'prop-types';
import React from 'react';

import mapData from './data/mapData.js';
import Map from './react/Map/Map.jsx';

require('./reset.css');
require('./App.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="td-app">
        <Map mapData={mapData} />
      </div>
    );
  }
}

// App.propTypes = {};

// App.defaultProps = {};

export default App;
