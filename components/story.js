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
        <Header size="medium"> Was you day bad? </Header>
        <Label attached="top right" color="green">10</Label>
      </Container>
      <Divider />
      <Container textalign="justified">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
        venenatis urna. Fusce a sollicitudin leo. Sed ultrices, eros et sagittis
        vulputate, metus mi gravida turpis, ut mollis nisi nisi vel lorem. Nulla
        nec auctor elit. Quisque lobortis accumsan justo eu laoreet. Morbi
        dapibus ligula in enim commodo, eu malesuada dui finibus. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Mauris iaculis orci quam, vel fringilla metus bibendum congue.
        Morbi urna ligula, eleifend eget ex facilisis, vestibulum auctor elit.
        Mauris erat mi, congue quis molestie sed, vestibulum vel erat.
        Pellentesque eu ex vitae turpis tempus egestas quis eget velit.
        Suspendisse ultricies vehicula massa, id scelerisque risus blandit sed.
        Aliquam erat mi, gravida et nibh ut, pretium mattis diam. Fusce gravida
        ultricies purus, non cursus ligula dictum non.
      </p>
      </Container>
      <Divider />
      <Button content="Upvote" icon="arrow circle up" color="green"/>
      <Button content="Downvote" icon="arrow circle down" color="orange"/>
      <Label attached="bottom right">Piorys</Label>
    </Segment>
  );
};
