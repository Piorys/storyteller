import React from "react";
import {Container} from "semantic-ui-react";
import Head from "./head";
import Header from "./header";

export default props => {
  return (
    <Container>
      <Head />
      <Header /> {props.children}{" "}
    </Container>
  );
};
