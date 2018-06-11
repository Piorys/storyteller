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
    let storiesCount = await contract.methods.storyCount().call();
    let stories = [];
    for (var i = 0; i < storiesCount; i++) {
      var count = i.toString();
      var story = await contract.methods.stories(count).call();
      stories.push(story);
    }
    return stories;
  }

  async renderStories() {
    const items = await this.props.stories;
    console.log(items);

    return (
      <Story
        title={items.tittle}
        story={items.story}
        author={items.authorName}
        rating={items.rating}
      />
    );
  }

  render() {
    return (
      <Layout>
        <NewStory />
        <Divider />
        {this.renderStories()}
      </Layout>
    );
  }
}
export default StoriesIndex;
