import React, { Component } from "react";
import { Card, Button, Form, TextArea } from "semantic-ui-react";
import Layout from "../components/layout";

class StoriesIndex extends Component {
  render() {
    return (
      <Layout>
      <div>
      <h1> Tell Your Story </h1>
        <Form>
          <Form.Input fuild label='Title' placeholder='Title'/>
          <TextArea placeholder="What's on your mind?"/>
          <Form.Button> Submit</Form.Button>
        </Form>
        </div>


      </Layout>
    );
  }
}
export default StoriesIndex;
