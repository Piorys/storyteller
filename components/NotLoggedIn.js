import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider,
  Message,
  Modal,
  Header,
  Image
} from "semantic-ui-react";
import contract from "../ethereum/storyteller";

class ModalNotLoggedIn extends Component {
  render() {
    return <h1> not logged in </h1>;
  }
}
export default ModalNotLoggedIn;
