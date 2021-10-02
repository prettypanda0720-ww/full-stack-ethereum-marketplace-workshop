require("@nomiclabs/hardhat-waffle");
// require("hardhat-deploy");
require('dotenv').config();
// require('@nomiclabs/hardhat-ethers');
// require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      timeout:350000,
    },
    // hardhat: {
    //   chainId: 1337
    // }
  }
};
