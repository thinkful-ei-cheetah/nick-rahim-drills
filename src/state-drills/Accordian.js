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

  state = {
    itemClicked: null
  }

  setSectionClicked(index) {
    console.log('setSectionClicked ' + index);
    this.setState({ itemClicked: index + 1 });
  };

  renderButtons() {
    return this.props.sections.map((section, index) => (
        <button key={index} onClick={() => this.setSectionClicked(index)}>
          {section.title}
        </button>
    ))
  }

  renderContent() {
    const currentSection = this.props.sections[this.state.itemClicked - 1];

    return (
      <p>
        {currentSection.content}
      </p>
    );
  }

  render() {
    return(
      <ul>
        {this.renderButtons()}
        {this.state.itemClicked && this.renderContent()}
      </ul>
    );
  }
}
