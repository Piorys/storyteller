import React from "react";
import {
  Segment,
  Divider,
  Button,
  Container,
  Header,
  Label,
  Icon
} from "semantic-ui-react";

export default props => {
  return (
    <Segment>
      <Container textAlign="center">
        <Header size="medium"> {props.title}</Header>
        <Label attached="top right" color="green">{props.rating}</Label>
      </Container>
      <Divider />
      <Container textalign="justified">
      <p>
        {props.story}
      </p>
      </Container>
      <Divider />
      <Button content="Upvote" icon="arrow circle up" color="green"/>
      <Button content="Downvote" icon="arrow circle down" color="orange"/>
      <Label attached="bottom right">{props.author}</Label>
    </Segment>
  );
};
