import React from 'react';

const styles = {
  imgContainer: {
    height: '450px',
    maxWidth: '700px',
    backgroundSize: 'contain',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '86px'
  },
  bottomText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: '2',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
    overflow: 'hidden',
    marginBottom: '24px'
  },
  underFig: {
    maxWidth: '105vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden'
  },
  transitionDiv: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    transform: 'translateY(0px)',
    transition: 'transform 0.2s ease-out'
  },
  underTransition: {
    marginBottom: '12px'
  },
  tableDiv: {
    display: 'table',
    width: '100%'
  },
  textDiv: {
    paddingLeft: '4px',
    textAlign: 'left',
    veriticalAlign: 'middle',
    display: 'table-cell'
  },
  buttonDiv: {
    textAlign: 'right',
    verticalAlign: 'middle',
    display: 'table-cell',
  },
  downArrow: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1'
  },
  pictureHolder: {
    position: 'relative',
    height: '67px',
    overflow: 'hidden',
  },
  underPics: {
    position: 'absolute',
    width: '11110px',
    backgroundColor: 'rgb(42,43,45)'
  },
  listStart: {
    position: 'absolute',
    listStyleType: 'none',
    left: '0px',
    transition: 'transform 0.3s ease-out 0s',
    margin: '0px',
    padding: '0px',
    // backgroundColor: 'transparent'
    backgroundColor: 'rgb(42,43,45)'
  },
  picList: {
    float: 'left',
    backgroundColor: 'rgb(42,43,45)'
    // backgroundColor: 'transparent'
  },
  bottomPics: {
    width: '100px',
    height: '67px',
    backgroundColor: 'rgb(42,43,45)'
  }
};
export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderView(){
    const style = {
      position: 'absolute',
      paddingBottom: '67%',
      paddingTop: '67%',
    };
    if(this.props.feed.length > 0){
      console.log(this.props.feed[this.props.currentIndex], 'in renderView of gallery');
      console.log(this.props.currentIndex, 'currentIndex')
      return (
        <div className="slide" style={{display: 'flex', justifyContent: 'center', boxSizing: 'border-box', height: '100%'}}>
          <div style={styles.imgContainer}>
            <img src={this.props.feed[this.props.currentIndex]}/>
          </div>
          <figcaption style={styles.bottomText}>
            <div style={styles.underFig}>
              <div style={styles.transitionDiv}>
                <div style={styles.underTransition}>
                  <div style={styles.tableDiv}>
                    <div style={styles.textDiv}>
                      <div style={{boxSizing: 'border-box', fontFamily: 'Roboto, sans-serif'}}>{this.props.descFeed[this.props.currentIndex]}</div>
                    </div>
                      <div style={styles.buttonDiv}>
                        <button style={{color: 'inherit', background: 'transparent', border: '0'}} onClick={this.props.setHovered}>
                          <span style={{boxSizing: 'border-box', fontFamily: 'Roboto, sans-serif'}}>
                            {this.props.hovered? 'Hide photo list' : 'Show photo list'}
                            <i className="fas fa-sort-down"></i>
                          </span>
                        </button>
                      </div>
                  </div>
                </div>
                <div style={{display: this.props.hovered ? 'block': 'none'}}>
                <div style={styles.pictureHolder}>
                  <div style={styles.underPics}>
                    <ul style={styles.listStart}>
                     {this.props.feed.map(pic => {
                       console.log('pic in bottom gallery', pic)
                       return <button style={{backgroundColor: 'rgb(42,43,45)', border:'none'}}><img src={pic} style={styles.bottomPics}/></button>
                     })}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </figcaption>
        </div>
        )
    } else {
      return <div>Loading. Please Wait</div>
    }
  }
  render(){
    
    return(
      <div>
        {this.renderView()}
      </div>
    );
  }
}
