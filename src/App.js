import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <h1>React Routing</h1> 
	 <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
