import React from 'react';

const LeftButton = (props) => {
  console.log(props, 'props in left button');
  const style = {
    position: 'absolute',
    left: '20px',
    color: 'white',
    top: '200px'
  }
  return (
    <div className="prevArrow" onClick={props.goToPrevSlide} style={style}>
      <i className="fa fa-angle-left fa-8x" aria-hidden="true"></i>
    </div>
  );
};

export default LeftButton;