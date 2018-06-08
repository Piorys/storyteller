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
import contract from "../ethereum/storyteller";

class StoriesIndex extends Component {

  static async getInitialProps() {
    const stories = await contract.methods.stories("0").call();
    return { stories };
  }

  renderStories(){
    const items = this.props.stories;
    console.log(items);
  }

  render() {
    return (
      <Layout>
        <NewStory />
        <Divider />
        <Story
          title={this.props.stories.tittle}
          story={this.props.stories.story}
          author={this.props.stories.authorName}
          rating={this.props.stories.rating}
        />
      <Button content="Get Stories!" primary onClick={()=>this.renderStories()}/>
      </Layout>
    );
  }
}
export default StoriesIndex;
