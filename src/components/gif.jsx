//gif.jsx
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      console.log(this.props.id);
      this.props.selectGif(this.props.id);
    }
  }


  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src}
           className="gif"
           onClick={this.handleClick} />
    );
  }
}

export default Gif;
