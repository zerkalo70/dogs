import React from 'react';
import './App.css';
import dogAudio from './dog.mp3';
import Item from "./item";

class App extends React.Component {
  constructor() {
    super();
    this.dogAudioRef = React.createRef()
  }
  state = {
    randomIndex: 3,
    counter: 0
  };

  componentDidMount() {
    setInterval(this.setRandomIndex, 1000)
  }

  setRandomIndex = () => {
    this.setState({
      randomIndex: Math.floor(Math.random() * 9)
    })
  };

  incCounter = () => {
    this.dogAudioRef.current.currentTime = 0;
    this.dogAudioRef.current.play();
    this.setState({
      counter: this.state.counter + 1
    })
  };
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  render() {
    return (
        <div className="wrapper">
          <audio src={dogAudio} ref={this.dogAudioRef}/>
          {this.items.map(i =>
              <Item key={i}
                    index={i}
                    randomIndex={this.state.randomIndex}
                    onClickHandler={this.incCounter}
              />)
          }
          <div className="counter">{this.state.counter}</div>
        </div>
    )
  }
}

export default App;
