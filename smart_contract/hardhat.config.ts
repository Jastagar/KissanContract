import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/TxZVv3vnGKYQCFlQz_UQngnFjd-7j7Go",
      accounts:["da16055875638e551f73e81e1252e40d161b3ab47758c376c055f0bc0d4cd8b0"]
    }
  }
};

export default config;
