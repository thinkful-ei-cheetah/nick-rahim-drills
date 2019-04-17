import React from 'react'

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }
  
  constructor(props) {
    super(props);
    this.state = {
      chamber: null, 
      spinningTheChamber: false,
      message: ''
    }
  }

  pullTrigger = () => {
    this.setState({spinningTheChamber: true});
    this.timeout = setTimeout(() => {
      let randomChamber = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    }, 2000);
  }

  updateMessage() {
    if(this.state.spinningTheChamber) {
      // this.setState({
      //   message: "spinning the chamber and pulling the trigger! ...."
      // });
      return "spinning the chamber and pulling the trigger! ....";
    }     
    else if (this.state.chamber === this.props.bulletInChamber) {
      // this.setState({
      //   message: "BANG !!!!!"
      // })
      return "BANG!!!!";
    }
    else {
      // this.setState({
      // message: "you're safe!!"
      // });
      return "you're safe!!"
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <p>{this.updateMessage()}</p>
        <button onClick={this.pullTrigger}>Pull the trigger!</button>
      </div>
    );
  }
}