const HDWallerProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('./Build/Storyteller.json');

//Passing account mnemonic and Infura appoint
//Worry not, the ethereum account associated with mnemonic is for test networks only ;)

const provider = new HDWallerProvider(
  'pluck snow tongue prize arrow report burden orchard slush tuna surge tourist',
  'https://rinkeby.infura.io/P6o07CCw6xXzOwz8QuJP'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account: '+ accounts[0]);

  result = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({data: compiledContract.bytecode})
    .send({gas: '3000000', from: accounts[0]});
  console.log('Contract deployed to: ' + result.options.address);
};
deploy();
