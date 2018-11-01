import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridTile from '@material-ui/core/GridListTile';
const faker = require('faker');

//remember that you made changes to source code for GridList for this
const styles = {
  cols: {
    maxHeight: '400px',
    display: 'flex',
    flex: '50%',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    border: '0',
    backgroundSize: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cols1:{
    maxHeight: '400px',
    flex: '50%',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    border: '0',
    backgroundSize: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    padding:'0',
    margin: '0',
    border: '0'
  },
  smallPics: {
    varticalAlign: 'top',
    display: 'inline-block',
    width: '50%',
    maxHeight: '50%',
    margin: '0',
    padding: '0',
    float: 'left',
    border: '0',
    backgroundSize: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pics: {
    maxHeight: '100%',
    maxWidth: '100%',
    display: 'flex',
    objectFit: 'scale-down'
  },
  btnDiv: {
    width: '210px',
    height: '36px',
    position: 'absolute',
    top: '20px',
    right: '20px'
  },
  saveBtn: {
    width: '93px',
    height: '100%',
    borderRadius: '4px'
  },
  shareBtn: {
    width: '93px',
    height: '100%',
    left: '0px',
    marginRight: '24px',
    borderRadius: '4px'
  },
  viewBtn: {
    height: '36px',
    width: '93px',
    right: '24px',
    top: '341px',
    position: 'absolute',
    borderRadius: '4px'
  },
  viewCont: {
    postion: 'absolute',
    bottom: '24px',
    left: '24px'
  },
  fbIcon: {
    marginLeft: '5px',
    marginRight: '15px',
    display: 'inline-block',
    fill: 'rgb(72, 72, 72)'
  }
};

const PhotoHolder = (props) => {
  const first = props.feed[0];
  const newGrids = props.feed.slice(1, 5);
  return (
    <div style={{left: '0', top: '0', right: '0'}}>
    <div style={styles.btnDiv}>
      <button style={styles.shareBtn} onClick={props.showSharePop}>
        <i className="far fa-paper-plane" style={styles.fbIcon}></i>
        Share
      </button>
      <button style={styles.saveBtn} onClick={props.showSavePop}>
        <i className="far fa-heart" style={styles.fbIcon}></i>
        Save
      </button>
    </div>
    <div className="row" style={styles.row}>
      <div style={styles.cols} className="col"><img style={{objecFit: "scale-down"}} src={first.imageUrl} onClick={props.onClick}/></div>
      <div style={styles.cols1} className="col">
        {newGrids.map(pic => {
          return (
            <div className="smallPic" style={styles.smallPics}>
              <img styles={styles.pics} src={pic.imageUrl} onClick={props.onClick}/>
            </div>
          )
        })}
      </div>
    </div>
      <button style={styles.viewBtn}><span onClick={props.onClick}>View Photos</span></button>
    </div>
  );
}

export default PhotoHolder;
/**
 const PhotoHolder = (props) => {
  return (<div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => {
        return (
          <GridTile
            key={tile.img}
            title={tile.title}
            onClick={props.onClick}
          >
            <img src={tile.img}/>
          </GridTile>
        )
      })}
    </GridList>
  </div>
  );
}


  const PhotoHolder = (props) => {
  return (<div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      <GridTile style={styles.gridList} key={tilesData[0].img} onClick={props.onClick}><img src={tilesData[0].img}/></GridTile>
      <div style={styles.gridList}>
        {newGrids.map((tile) => {
          return(
            <div key={tile.img} onClick={props.onClick}><img src={tile.img} style={styles.smallGrid}/></div>
          )
        })}
      </div>
    </GridList>
  </div>
  );
}
 */