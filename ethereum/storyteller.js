import web3 from './web3';
import Storyteller from './Build/Storyteller.json';

const instance = new web3.eth.Contract(
  JSON.parse(Storyteller.interface),
  '0xD17c102Fb21f1286731d25eAaf45bc71AEcb6A33'
);

export default instance;
