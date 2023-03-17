// import  {ContractFactory} from "ethers";
import hardhat from 'hardhat';

async function main() {
  const ContractFactoryT = await hardhat.ethers.getContractFactory("KissanCoins");

  const instance = await ContractFactoryT.deploy();
  await instance.deployed();

  console.log(`Contract deployed to ${instance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
