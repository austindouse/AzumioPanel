import React, {Component} from "react";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";
import ClientFocus from "./ClientFocus";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPanel: 5,
    };
  }

  render() {
    return (
      <div className="panelContainer">
        {this.state.currentPanel === 1 ? <Panel1 /> : ""}
        {this.state.currentPanel === 2 ? <Panel2 /> : ""}
        {this.state.currentPanel === 3 ? <Panel3 /> : ""}
        {this.state.currentPanel === 4 ? <Panel4 /> : ""}
        {this.state.currentPanel === 5 ? <ClientFocus /> : ""}
        <Footer />
      </div>
    );
  }
}

export default App;
