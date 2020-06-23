import React, {Component} from "react";
import Data from "../dataStore";
import Header from "./Header";
import Options from "./Options";
import Footer from "./Footer";

class ClientFocus extends Component {
  constructor() {
    super();
    this.state = {
      question: Data.question,
      prompt: Data.prompt,
      options: Data.options,
    };
  }

  render() {
    return (
      <div>
        <Header question={this.state.question} prompt={this.state.prompt} />
        <Options options={this.state.options} />
        <Footer />
      </div>
    );
  }
}
export default ClientFocus;
