import React from 'react';
export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderView(){
    const style = {
      display: 'inline-block'
    };
    if(this.props.feed.length > 0){
      console.log(this.props.feed[this.props.currentIndex], 'in renderView of gallery');
      console.log(this.props.currentIndex, 'currentIndex')
      return <div className="slide"><img src={this.props.feed[0].imageUrl} style={style}/></div>
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
