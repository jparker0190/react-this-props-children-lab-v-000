// Code Invitation Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Invitation extends React.Component{
  render(){
    return (
      <div>
        <h1>Youve been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Invitation;