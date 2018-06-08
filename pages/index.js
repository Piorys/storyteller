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
        <Divider />
        <Story
          title="Was your day bad?"
          story="Not at all tbh :)"
          author="Piorys"
          rating="4"
        />
        <Story
          title="I had a good sandwitch"
          story="Sandwitch was pretty good I guess"
          author="Sarah"
          rating="2"
        />
        <Story
          title="Look at my pizza!"
          story="My pizza was quite nice"
          author="Piorys"
          rating="1"
        />
      </Layout>
    );
  }
}
export default StoriesIndex;
