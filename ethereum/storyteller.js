import web3 from './web3';
import Storyteller from './Build/Storyteller.json';

const instance = new web3.eth.Contract(
  JSON.parse(Storyteller.interface),
  '0xB96fDf00C77011DD018711f3dC70Fe6409Fbaa5D'
);

export default instance;
