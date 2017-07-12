// import PropTypes from 'prop-types';
import React from 'react';

import Map from './react/map/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="td-app">
        <Map />
      </div>
    );
  }
}

// App.propTypes = {};

// App.defaultProps = {};

export default App;
