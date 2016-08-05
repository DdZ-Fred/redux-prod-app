import React, { Component, PropTypes } from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        My App Component
        {this.props.children}
      </div>
    );
  }

}

export default App;
