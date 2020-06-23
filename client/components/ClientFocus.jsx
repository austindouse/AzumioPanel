import React, {Component} from "react";
import Data from "../dataStore";
import Header from "./Header";

class ClientFocus extends Component {
  constructor() {
    super();
    this.state = {
      question: Data.question,
      prompt: Data.prompt,
    };
  }

  render() {
    return (
      <div>
        <Header question={this.state.question} prompt={this.state.prompt} />
      </div>
    );
  }
}
export default ClientFocus;
