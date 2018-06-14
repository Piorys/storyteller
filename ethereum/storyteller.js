import web3 from './web3';
import Storyteller from './Build/Storyteller.json';

const instance = new web3.eth.Contract(
  JSON.parse(Storyteller.interface),
  '0x9174faed0181AbD2bA08b07b33fBa442f97b66E3'
);

export default instance;
