import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles/';
import PhotoHolder from './components/PhotoHolder.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import LeftButton from './components/LeftButton.jsx';
import RightButton from './components/RightButton.jsx';
import ReturnHome from './components/ReturnHome.jsx';
import SharePopup from './components/SharePopup.jsx';
import SavePopup from './components/SavePopup.jsx';

const theme = createMuiTheme();
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [],
      currentIndex: 0,
      view: 'home',
      hovered: false
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
  showSharePop(){
    this.setState({
      view: 'share'
    })
  }
  showSavePop(){
    console.log('clicked savePop')
    this.setState({
      view: 'save'
    })
  }
  setHovered(){
    this.setState({
      hovered: !this.state.hovered
    });
  }

  renderView(){
    if(this.state.view === 'home') {
      let homeDisplay = this.state.feed;
      if(homeDisplay.length < 1) {
        return <div>Loading. Please wait.</div>
      }
      return (
        <div>
          <PhotoHolder onClick={this.changeView.bind(this)} feed={this.state.feed} view={this.state.view} showSharePop={this.showSharePop.bind(this)} showSavePop={this.showSavePop.bind(this)}/>
        </div>
      )
      
    } else if (this.state.view === 'share') {
      return (
        <div>
          <SharePopup returnHome={this.returnHome.bind(this)}/>
        </div>
      )
    } else if (this.state.view === 'save'){
      return(
        <div>
          <SavePopup returnHome={this.returnHome.bind(this)}/>
        </div>
      )
    } else {
      const galStyles = {
        backgroundColor: 'rgb(42, 43, 45)',
        height: '100vh',
        width: '100%'
      }
      return(
        <div className="gallery" style={galStyles}>  
          <ReturnHome returnHome={this.returnHome.bind(this)}/>
          <LeftButton goToPrevSlide={this.goToPrevSlide.bind(this)}/>
          <PhotoGallery feed={this.state.feed} currentIndex={this.state.currentIndex} setHovered={this.setHovered.bind(this)} hovered={this.state.hovered}/>
          <RightButton goToNextSlide={this.goToNextSlide.bind(this)}/>
        </div>
      );
    }
  }

  render() {
    return(
      <MuiThemeProvider theme={theme}>  
        {this.renderView()}
      </MuiThemeProvider>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));