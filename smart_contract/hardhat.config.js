//https://eth-ropsten.alchemyapi.io/v2/DdMcWddYqVkBLfSWbgaDAaKcsKrbfaUH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DdMcWddYqVkBLfSWbgaDAaKcsKrbfaUH',
      accounts: ['c65286c5fddc7addbe89ee25de665756e892465fd59e387e6ed5549cf00e7bb0']

    }
  }
}