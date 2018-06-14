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

class ModalNoMetamask extends Component {
  state = {
    errMsg: "",
    userName: "",
    isLoggedIn: false
  };

  render() {
    return (
      <Modal open={!this.state.isLoggedIn} dimmer="blurring" centered="true">
        <Modal.Content image>
          <Image size="small" src="https://metamask.io/img/metamask.png" />
          <Modal.Description>
            <Header>Hello There!</Header>
            <Divider />
            <p> Looks like you are not using Metamask </p>
            <p>
              In order to use this page you must{" "}
              <a href="https://metamask.io/"><strong>install it</strong></a>
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalNoMetamask;
