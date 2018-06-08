import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //Browser provider with metamask
  web3 = new Web3(window.web3.currentProvider);
}else{
  //Server || user does not use metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/P6o07CCw6xXzOwz8QuJP'
  );
  web3 = new Web3(provider);
}

export default web3;
