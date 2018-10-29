import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PhotoHolder from './components/PhotoHolder.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import LeftButton from './components/LeftButton.jsx';
import RightButton from './components/RightButton.jsx';
import ReturnHome from './components/ReturnHome.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [],
      currentIndex: 0,
      view: 'home'
    }
  }

  componentDidMount(){
    $.get('/pictures', res => {
      this.setState({
        feed: res
      }, () => {console.log(this.state.feed, 'feed state on load')})
    })
  }

  goToPrevSlide() {
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.feed.length -1,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -= 1,
    }))
  }
  goToNextSlide() {
    if(this.state.currentIndex === this.state.feed.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex += 1,
      translateValue: prevState.translateValue + -(this.galleryWidth())
    }))
  }

  galleryWidth() {
    return document.querySelector('.gallery').clientWidth;
  }

  changeView(){
    this.setState({
      view: 'gallery'
    })
  }

  returnHome(){
    this.setState({
      view: 'home'
    })
  }

  renderView(){
    if(this.state.view === 'home') {
      let homeDisplay = this.state.feed;
      if(homeDisplay.length < 1) {
        return <div>Loading. Please wait.</div>
      }
      return (
        <div>
          <div onClick={this.changeView.bind(this)}><img src={homeDisplay[0].imageUrl}/></div>
          <div onClick={this.changeView.bind(this)}><img src={homeDisplay[1].imageUrl}/></div>
          <div onClick={this.changeView.bind(this)}><img src={homeDisplay[2].imageUrl}/></div>
          <div onClick={this.changeView.bind(this)}><img src={homeDisplay[3].imageUrl}/></div>
          <div onClick={this.changeView.bind(this)}><img src={homeDisplay[4].imageUrl}/></div>
        </div>
      )
      // return <h1 onClick={this.changeView.bind(this)}>You're on the home page</h1>
    } else {
      const galStyles = {
        backgroundColor: 'rgb(42, 43, 45)',
        height: '100%',
        width: '100%'
      }
      return(
        <div className="gallery" style={galStyles}>  
          <ReturnHome returnHome={this.returnHome.bind(this)}/>
          <LeftButton goToPrevSlide={this.goToPrevSlide.bind(this)}/>
          <PhotoGallery feed={this.state.feed} currentIndex={this.state.currentIndex}/>
          <RightButton goToNextSlide={this.goToNextSlide.bind(this)}/>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="gallery">  
        {this.renderView()}
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));