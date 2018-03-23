import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu
      style={{
        marginTop: "20px"
      }}
    >
      <Link route="/">
        <a className="item">Story Teller</a>
      </Link>
    </Menu>
  );
};
