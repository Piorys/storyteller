import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  TextArea,
  Segment,
  Divider,
  Message,
  Modal,
  Header,
  Image
} from "semantic-ui-react";
import contract from "../ethereum/storyteller";
import web3 from "../ethereum/web3";
import ModalNoMetamask from "../components/NoMetamask";
import ModalNotLoggedIn from "../components/NotLoggedIn";

class Landing extends Component {
  static async getInitialProps(){
    let accounts = await web3.eth.getAccounts();
    return {accounts}
  }

  async checkMetamask(){
    const accounts = this.props.accounts;
    if (typeof window == "undefined" || typeof window.web3 == "undefined") {
      return <ModalNoMetamask />;
    } else if (accounts.length === 0||typeof accounts.accounts === undefined) {
      return <ModalNotLoggedIn />;
    }
  }

   render() {
     return(
       <div>
       {this.checkMetamask()}
       </div>
     )

  }
}

export default Landing;
