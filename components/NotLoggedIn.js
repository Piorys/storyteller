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

export default props => {
  return (
    <Modal
      defaultOpen
      dimmer="blurring"
      centered="true"
    >
    <Modal.Content image>
      <Image size="small" src="https://metamask.io/img/metamask.png" />
        <Modal.Description>
          <Header>Please Log In</Header>
          <Divider />
          <p> Metamask successfully identified </p>
          <p> Please Log In to continue and refresh this page </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
