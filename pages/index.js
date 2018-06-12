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
    const storiesCount = await contract.methods.storyCount().call();
    let stories = [];
    for (var i = 0; i < storiesCount; i++) {
      var count = i.toString();
      var story = await contract.methods.stories(count).call();
      stories.push(story);
    }
    return { stories };
  }

  renderStories() {
    const data = this.props.stories.map(story => {
      return {
        description: (
          <Story
            title={story.tittle}
            story={story.story}
            author={story.authorName}
            rating={story.rating}
          />
      ),
        fluid: true
      };
    });
    console.log(data);
    return <Card.Group items={data} />
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
