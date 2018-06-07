import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider
} from "semantic-ui-react";
import Layout from "../components/layout";
import NewStory from "../components/NewStory";
import Story from "../components/story.js";

class StoriesIndex extends Component {
  render() {
    return (
      <Layout>
        <NewStory />
        <Divider/>
        <Story />
      </Layout>
    );
  }
}
export default StoriesIndex;
