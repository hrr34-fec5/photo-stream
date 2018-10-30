import React from 'react';

const styles = {
  outDiv: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '2000',
    background: 'rgba(0,0,0,0.75)'
  },
  secondDiv:{
    display: 'table',
    height: '100%',
    width: '100%'
  },
  thirdDiv: {
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '64px'
  },
  fourthDiv: {
    backgroundColor: 'rbg(255, 255, 255)',
    width: '100%',
    position: 'relative',
    maxWidth: '376px',
    margin: 'auto'
  },
  fifthDiv: {
    boxSizing: 'border-box'
  },
  popDiv: {
    backgroundColor: 'rbg(255, 255, 255)',
    boxSizing: 'border-box',
    padding: '24px'
  },
  topBtn: {
    padding: '0px',
    margin: '0px',
  },
  btnInner: {
    height: '16px',
    width: '16px',
    display: 'block',
    fill: 'rgb(118, 118, 118)',
  },
  headerDiv: {
    paddingBottom: '24px',
    paddingTop: '0px',
    borderBottom: '0px',
  },
  h1Div: {
    fontWeight: '800',
    margin: '0px',
    wordWrap: 'break-word',
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: 'normal',
    textTransform: 'undefined',
    color: '#484848',
    paddingTop: '2px',
    paddingBottom: '2px',
  },
  h1: {
    color: '#484848',
    fontSize: '1em',
    fontWeight: 'normal',
    lineHeight: '1.1',
    margin: '0px',
    padding: '0px'
  },
  headerBody: {
    margin: '0px',
    wordWrap: 'break-word',
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: 'normal',
    color: '#484848',
    fontWeight: 'normal'
  },
};

const SharePopup = (props) => {
  return (
    <div style={styles.outDiv}>
      <div style={styles.secondDiv}>
        <div style={styles.thirdDiv}>
          <div style={styleMedia.fourthDiv}>
            <div style={styles.fifthDiv}>
              <section style={{display: 'block'}}>
                <div style={styles.popDiv}>
                  <div style={{marginBottom: '24px'}}>
                    <button style={styles.topBtn} onClick={props.onClick}>
                    <i class="fas fa-times" style={styles.btnInner}></i>
                    </button>
                    <header>
                      <div style={styles.headerDiv}>
                        <div style={styles.h1Div}>
                          <h1 style={styles.h1}>Share</h1>
                        </div>
                        <div style={styles.headerBody}>Checkout this awesome listing on Airbnb! This will be the description that user would share in their post. Isn't it great?!</div>
                      </div>
                    </header>
                    <section style={{display: 'block'}}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SharePopup;