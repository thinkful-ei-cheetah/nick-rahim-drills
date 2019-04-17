import React from 'react';

export default class Bomb extends React.Component {
  state = {
    count: 0,
    message: ''
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      this.displayMessage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayMessage() {
    if (this.state.count === 8) {
      this.setState({ message: 'BOOM!!!' });
      this.componentWillUnmount();
    } else if (this.state.count % 2 === 0) {
      this.setState({ message: 'tick' });
    } else {
      this.setState({ message: 'tock' });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
