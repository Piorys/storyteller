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
      defaultOpen="true"
      dimmer="blurring"
      centered="true"
      closeIcon="true"
      closeOnDimmerClick="true"
    >
      <Modal.Content image>
        <Image size="small" src="https://metamask.io/img/metamask.png" />
        <Modal.Description>
          <Header>Welcome!</Header>
          <Divider />
          <p> Metamask successfully identified </p>
          <p> Your address is: {props.address}</p>
          <p> Close this window to continue </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
