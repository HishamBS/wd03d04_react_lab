import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }

  render() {
    let handleClick = e => {
      e.stopPropagation();
      console.log("handling Fave click!");
      this.setState({
        isFave: !this.state.isFave
      });
    };
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className= {`film-row-fave ${isFave}`}>
        <p className="material-icons" onClick={handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}
