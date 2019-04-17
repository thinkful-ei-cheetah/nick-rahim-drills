import React from 'react'

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };

  setWho(text) {
    this.setState({who: text});
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button className="world" onClick={() => { this.setWho('world')}}>World</button>
        <button className="Friend" onClick={() => { this.setWho('friend') }}>Friend</button>
        <button className="React" onClick={() => { this.setWho('react') }}>React</button>
      </div>
    );
  };
};

export default HelloWorld;