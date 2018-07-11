import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider,
  Message
} from "semantic-ui-react";
import contract from "../ethereum/storyteller";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class NewStory extends Component {
  state = {
    errorMsg: "",
    loading: false,
    storyTittle: "",
    storyContent: "",
    hasProfile: false,
    profile: {},
    accounts: []
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const hasProfile = await contract.methods.checkIfUserExist(accounts[0]);
    await this.setStateAsync({
      accounts: accounts,
      hasProfile: hasProfile
    });
  }

  async checkUser() {
    if (hasProfile === true) {
      console.log("hasProfile");
      const profile = await contract.methods.userBase(accounts[0]);
      await this.setStateAsync({
        hasProfile: true,
        profile: profile
      });
    } else {
      await this.setStateAsync({
        hasProfile: false
      });
    }
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .createStory(this.state.storyTittle, this.state.storyContent)
        .send({
          from: accounts[0]
        });
    } catch (error) {
      this.setState({ errorMsg: error.message });
      console.log("Error was thrown, detailed description below:");
      console.error(error);
    }
    this.setState({ loading: false });
    Router.pushRoute("/");
  };

  render() {
    console.log(this.state.hasProfile);
    console.log(this.state.accounts);
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
            <Divider horizontal>Tell your story</Divider>
            <Form.Input
              placeholder="Title (max 50)"
              style={{
                marginTop: "10px"
              }}
              value={this.state.storyTittle}
              onChange={event =>
                this.setState({ storyTittle: event.target.value })
              }
            />
            <Divider horizontal />
            <TextArea
              placeholder="What's on your mind? (max 255)"
              value={this.state.storyContent}
              onChange={event =>
                this.setState({ storyContent: event.target.value })
              }
            />
            <Message error header="Oops!" content={this.state.errorMsg} />
            <Button
              icon="plus"
              loading={this.state.loading}
              primary
              content="Submit"
              labelPosition="right"
              style={{
                marginTop: "10px"
              }}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

export default NewStory;
