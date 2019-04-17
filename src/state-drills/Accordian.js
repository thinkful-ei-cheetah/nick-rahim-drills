import React from 'react';

export default class Accordian extends React.Component {
  static defaultProps = {
    sections: [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        title: 'Section 2',
        content:
          'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
      },
      {
        title: 'Section 3',
        content:
          'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
      }
    ]
  };

  static state = {
    itemClicked: 1
  };

  setSectionClicked = id => {
    this.setState({ itemClicked: id });
    // return this.props.sections[this.state.itemClicked].content;
  };

  render() {
    const list = this.props.sections.map((element, index) => {
      return (
        <li>
          <button key={index} onClick={() => this.setSectionClicked(index)}>
            {element.title}
          </button>
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
