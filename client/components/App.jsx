import React, {Component} from "react";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import Panel4 from "./Panel4";
import ClientFocus from "./ClientFocus";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPanel: 5,
    };
  }

  render() {
    return (
      <div>
        {this.state.currentPanel === 1 ? <Panel1 /> : ""}
        {this.state.currentPanel === 2 ? <Panel1 /> : ""}
        {this.state.currentPanel === 3 ? <Panel1 /> : ""}
        {this.state.currentPanel === 4 ? <Panel1 /> : ""}
        {this.state.currentPanel === 5 ? <ClientFocus /> : ""}
      </div>
    );
  }
}

export default App;
