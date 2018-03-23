const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledContract = require('../ethereum/Build/Storyteller.json');

beforeEach(async ()=>{
  accounts = await web3.eth.getAccounts();
  storyteller = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({data: compiledContract.bytecode})
    .send({from: accounts[0], gas: "3000000"});

});

describe('Storyteller',()=>{
    it('deploys to blockchain',()=>{
      assert.ok(storyteller.options.address);
    })
});
