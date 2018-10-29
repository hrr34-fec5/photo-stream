import React from 'react';

const LeftButton = (props) => {
  console.log(props, 'props in left button');
  const style = {
    display: 'inline-block',
    color: 'white'
  }
  return (
    <div className="prevArrow" onClick={props.goToPrevSlide} style={style}>
      <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default LeftButton;