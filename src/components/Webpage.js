import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText'

class WebPage extends React.Component {
  render(){
    return (
      <div>
        <title>
          The world's coolest webpage
        </title>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default WebPage;
