import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export class App extends Component {
  render() {
    return (
      <div>
        <Button variant="warning">
          Warning <FontAwesomeIcon icon={faHome} />
        </Button>
      </div>
    );
  }
}

export default App;
