require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('hardhat-deploy')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 console.log(process.env.RINKBY_RPC_URL)

module.exports = {
  // solidity: "0.8.8",
  solidity : {
    compilers : [
      {
        version : "0.8.8"
      },
      {
        version : "0.6.6"
      }
    ]
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
    },
  },
  defaultNetwork : "hardhat",
  networks: {
    rinkeby: {
      url: process.env.RINKBY_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        chainId : 4,
        blockConfirmations : 6
    },
  },
  gasReporter: {
      enable : false,
      noColors : true,
      outputFile : 'gas-fee-report.txt',
      currency : "USD",
      coinmarketcap : process.env.COINMARKET_API_KEY,

  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};