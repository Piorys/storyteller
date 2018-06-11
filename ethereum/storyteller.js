import web3 from './web3';
import Storyteller from './Build/Storyteller.json';

const instance = new web3.eth.Contract(
  JSON.parse(Storyteller.interface),
  '0xD7760bEe1F38683a3ca3656D77B98981C6ABaa51'
);

export default instance;
