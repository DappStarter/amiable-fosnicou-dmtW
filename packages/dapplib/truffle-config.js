require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note often unveil hover enrich swift tuition'; 
let testAccounts = [
"0x839ebcd92f4740fee44a4331886dc597a6bfe7775b9e5bc8dc979ee37e3234ee",
"0x40b6e29556e220f98372d2a515f61d78a10421817226d3f109a2427195d9a4b0",
"0x7e3919f55f92cc043d672c4e002ca540068d2890de9ee395178b27f12fd4dbe3",
"0xb0c10b13cb7ecb4ed66b5da7a6fea40c7982e6e6d4401ac1e28564073f0086fa",
"0xe84fe2d86c68244c1e12956fcf3b0ef37cb8c17d08ce0acf6001945e31c6e23d",
"0x9cde3d70c65b13788284ecae193448a5bb6e9f19aec92d398ea04b2f3f01d94a",
"0x98391855fff9c98c8c93b6b6c7bf7ac6b35182372a11867b97d4fe731a9d60fd",
"0xecf012c4bd43d217fbed9651b10f4f829acc0fa9e3a9547e8730cb130d231706",
"0xbfd6d53410e1b47dc3ebe14c3f6d8c7e5158f12115d1da6cc3d66f84d79bdc56",
"0x9bedccd3e26f9a59d46cf387b6910702caefdd675325ca4cc3a8b704e19beec9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

