import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $.get('/')
  }

  render() {
    return(
      <div className="render">Rendered</div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));