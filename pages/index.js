import React, {Component} from "react";
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

class StoriesIndex extends Component {
  render() {
    return (
      <Layout>
        <NewStory />
        <div>
          <h1> The feed </h1>
        </div>
      </Layout>
    );
  }
}
export default StoriesIndex;
