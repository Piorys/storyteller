import React from "react";
import { Container } from "semantic-ui-react";
import Head from "./head"

export default props => {
  return(
    <Container>
    <Head/>
      {props.children}
    </Container>
  );
};
