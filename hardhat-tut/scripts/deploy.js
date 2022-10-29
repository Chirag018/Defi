const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require('../constants')

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;

  const exchangeContract = await ethers.getContractFactory('Exchange');

  const deployedExchangeContract = await exchangeContract.deploy(cryptoDevTokenAddress);

  console.log('exchange contract address: ', deployedExchangeContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })