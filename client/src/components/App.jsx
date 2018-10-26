import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="render">Rendered</div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));