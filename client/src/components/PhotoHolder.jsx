import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridTile from '@material-ui/core/GridListTile';
const faker = require('faker');

//remember that you made changes to source code for GridList for this
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '600px'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height: '400px'
  },
  smallGrid:{
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
    height: '250px'
  },
  divs: {
    height: '400px',
    width: '50%',
    display: 'inline-block',
  }
};

const tilesData = [
  {
    img: faker.image.imageUrl(),
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: faker.image.imageUrl(),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: faker.image.imageUrl(),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: faker.image.imageUrl(),
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: faker.image.imageUrl(),
    title: 'Honey',
    author: 'fancycravel',
  },
];
const newGrids = tilesData.slice(1);
const PhotoHolder = (props) => {
  console.log(tilesData[0].img, 'check if faker is working');
  return (
    <div>
      <div style={styles.div}><img src={tilesData[0].img}/></div>
      <div style={styles.div}><img src={tilesData[1].img}/></div>
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