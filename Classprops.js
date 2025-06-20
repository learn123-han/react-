import React, { Component } from 'react'

 class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello ! i am {this.props.name} learning props</h1>
        <h2> I am from {this.props.place}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Classprops;

