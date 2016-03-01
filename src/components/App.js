import React, { Component } from 'react';
export const ROOT_URL = 'http://webapi.fusionhit.com/api/Movies';//not using this because cors...

class App extends Component {
  render () {
    return (
      <div>
        <h1>hlkashalkhls</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
