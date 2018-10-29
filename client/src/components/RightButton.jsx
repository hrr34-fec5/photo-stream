import React from 'react';

const RightButton = (props) => {
  const style = {
    display: 'inline-block',
    color: 'white',
  }
  return (
    <div className="nextArrow" onClick={props.goToNextSlide} style={style}>
      <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>    
    </div>
  );
};

export default RightButton;