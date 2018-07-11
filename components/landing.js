import React, { Component } from "react";
import contract from "../ethereum/storyteller";
import web3 from "../ethereum/web3";
import ModalNoMetamask from "../components/NoMetamask";
import ModalNotLoggedIn from "../components/NotLoggedIn";
import ModalLoggedInNoAcc from "../components/ModalLoggedInNoAcc.js";

class Landing extends Component {
  state = {
    accounts: []
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    await this.setStateAsync({ accounts: accounts });
  }

  render() {
    console.log(this.state.accounts);
    if (typeof window == "undefined" || typeof window.web3 == "undefined") {
      return <ModalNoMetamask />;
    } else if (this.state.accounts.length === 0) {
      return <ModalNotLoggedIn />;
    } else {
      return <ModalLoggedInNoAcc address={this.state.accounts[0]} />;
    }
  }
}

export default Landing;
