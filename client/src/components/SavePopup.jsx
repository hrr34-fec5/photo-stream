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
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    position: 'relative',
    maxWidth: '568px',
    margin: 'auto'
  },
  fifthDiv: {
    boxSizing: 'border-box'
  },
  popDiv: {
    backgroundColor: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    padding: '32px'
  },
  topBtn: {
    padding: '0px',
    margin: '0px',
  },
  saveToList: {
    overflowWrap: 'break-word',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: 'normal',
    color: 'rgb(72, 72, 72)',
    fontWeight: '800',
    margin: '0px'
  },
  divider: {
    marginTop: '16px',
    marginBottom: '16px'
  },
  dividerSub: {
    textAlign: 'center',
    overflow: 'hidden'
  },
  outerSpan: {
    position: 'relative',
    padding: '16px'
  },
  innerSpan: {
    fontWeight: '600',
    overflowWrap: 'break-word',
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: 'normal',
    // font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    color: 'rgb(118, 118, 118)',
    display: 'inline',
    margin: '0px'
  },
  signUpLink: {
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: 'normal',
    // fontFamily: var(--font-button-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
    paddingTop: '12px',
    paddingBottom: '12px',
    fontWeight: '800',
    borderWidth: '2px',
    paddingLeft: '24px',
    paddingRight: '24px',
    boxShadow: 'none',
    background: '#FF5A5F',
    borderColor: 'transparent',
    color: '#ffffff',
  },
  innerTableDiv: {
    display: 'table',
    margin: '0px auto'
  },
  iconDiv: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  emailIcon: {
    height: '18px',
    width: '18px',
    display: 'block',
    fill: 'currentColor'
  }
};

const SavePopup = (props) => {
  return (
    <div style={styles.outDiv}>
      <div style={styles.secondDiv}>
        <div style={styles.thirdDiv}>
          <div style={styles.fourthDiv}>
            <div style={styles.fifthDiv}>
              <section style={{display: 'block'}}>
                <div style={styles.popDiv}>
                  <div style={{marginBottom: '24px'}}>
                    <button style={styles.topBtn} onClick={props.returnHome}>
                      <i className="fas fa-times" style={styles.btnInner}></i>
                    </button>
                  </div>
                  <section style={{display: 'block'}}>
                    <div style={{marginBottom: '24px'}}>
                      <div style={styles.saveToList}>Save to list</div>
                    </div>
                    <div>
                      <div>
                        <div style={{marginBottom: '8px', backgroundColor: 'blue'}}>Continue to Facebook</div>
                        <div sytl={{marginTop: '0em'}}>Continue to Google</div>
                      </div>
                      <div style={styles.divider}>
                        <div style={styles.dividerSub}>
                          <span style={styles.outerSpan}>
                            <span style={styles.innerSpan}>or</span>
                          </span>
                        </div>
                      </div>
                      <div style={styles.divider}>
                        <a href='#' style={styles.signUpLink}>
                          <div style={styles.innerTableDiv}>
                            <div style={styles.iconDiv}>
                              <div style={{marginRight: '12px'}}>
                              <i class="far fa-envelope" style={styles.emailIcon}></i>
                              </div>
                            </div>
                            <div style={styles.iconDiv}>Sign up with Email</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavePopup;