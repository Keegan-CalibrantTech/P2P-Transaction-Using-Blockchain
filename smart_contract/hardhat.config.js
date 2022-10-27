require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goreli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rFlYQ6IGfDzeZUjYI8khTmSveSCrm9MF',
      accounts: ['0x994b342dd87fc825f66e51ffa3ef71ad818b6893'],
    },
  },
};