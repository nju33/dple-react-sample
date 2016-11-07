import React, {Component} from 'react';
import {render} from 'react-dom';
// import HelloReact from './HelloReact';

class HelloReact extends Component {
  render() {
    return <h1>Hello React</h1>;
  }
}

render(
  <HelloReact></HelloReact>,
  document.getElementById('demo-react')
  // document.getElementById('shadowDOMParent').children[0]
    // .shadowRoot.getElementById('demo-react')
);
