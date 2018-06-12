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
          <Form.Input
            placeholder="Title"
            style={{
              marginTop: "10px"
            }}
          />
          <Divider horizontal />
          <TextArea placeholder="What's on your mind?" />
          <Button
            icon="plus"
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
};
