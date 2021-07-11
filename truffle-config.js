
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "6b1ef2c97f914d1eb35e0fbed1219984";
const mnemonic = "pact super anger west return vacuum post coconut wolf script where tuition"
const URL = 'https://rinkeby.infura.io/v3/' + infuraKey


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      networkCheckTimeout: 10000,
      provider:function() { return new HDWalletProvider(mnemonic, URL);
      },
      network_id: 4,
      gas: 4700000,
      confirmations: 4 
    }
  }
};