import React from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider
} from "semantic-ui-react";

export default props => {
  return (
    <div>
      <Segment>
        <Form>
          <Divider horizontal>Tell your story</Divider>
          <Form.Input fuild placeholder="Title" />
          <Divider horizontal />
          <TextArea placeholder="What's on your mind?" />
          <Button icon="plus" primary content="Submit" labelPosition="right" />
        </Form>
      </Segment>
    </div>
  );
};
