import React from 'react';

const ReturnHome = (props) => {
  const styles = {
    position: 'absolute',
    right: '25px',
    top: '20px',
    color: 'white',
  }
  return (
    <div onClick={props.returnHome} style={styles}>
      <i className="fas fa-times fa-3x"></i>
    </div>
  );
};

export default ReturnHome;