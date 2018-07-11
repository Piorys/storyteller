import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider
} from "semantic-ui-react";

//Components
import Layout from "../components/layout";
import NewStory from "../components/NewStory";
import Story from "../components/story.js";
import Landing from "../components/landing.js";

//Ethereum
import contract from "../ethereum/storyteller.js";
import web3 from "../ethereum/web3";



class StoriesIndex extends Component {
  static async getInitialProps() {
    const storiesCount = await contract.methods.storyCount().call();
    let stories = [];
    for (var i = 0; i < storiesCount; i++) {
      var count = i.toString();
      var story = await contract.methods.stories(count).call();
      stories.push(story);
    }
    stories.reverse();
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
    return <Card.Group items={data} itemsPerRow="2" textAlign="center" />;
  }

  render() {
    return (
      <Layout>
        <Landing/>
        <NewStory />
        <Divider />
        {this.renderStories()}
      </Layout>
    );
  }
}
export default StoriesIndex;
