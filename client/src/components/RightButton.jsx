import React from 'react';

const RightButton = (props) => {
  const style = {
    position: 'absolute',
    right: '20px',
    color: 'white',
    top: '200px'
  }
  return (
    <div className="nextArrow" onClick={props.goToNextSlide} style={style}>
      <i className="fa fa-angle-right fa-8x" aria-hidden="true"></i>    
    </div>
  );
};

export default RightButton;