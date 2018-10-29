import React from 'react';
import ReactDOM from 'react-dom';
import { runInThisContext } from 'vm';

class PhotoHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="photo-holder">
        <div className="photo-split">photo split</div>
        <div className="photo-split">photo split</div>
        <div className="photo-split">photo split</div>
        <div className="photo-split">photo split</div>
      </div>
    )
  }
}

export default PhotoHolder;