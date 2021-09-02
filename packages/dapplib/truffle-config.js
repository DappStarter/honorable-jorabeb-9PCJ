require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pull hunt narrow flat slogan'; 
let testAccounts = [
"0x02ac02f447e1c0f3de24b9a48d83121dab7a05a448cc801f6a1e0e19a5efb2b4",
"0xb7a69432c02f9bbbb6366b538724d856ef679c71c28658902ea9e387f4917afc",
"0x9743f70afc2104a562f48ee7b065787db574664fea651df629bb4b7f271d9c6d",
"0x91828cfa7893449aaf00479da6a087fb191f5158d55dc61d2c5fd7740450a46a",
"0xd3edc020219eeb05f175942bdfd14fd8dadc8b4c4ee78efaee84eb8a19fc03cc",
"0x2a7cd9db26f5b9b84eb69314129bb577c0dfdec9d4efb46831d5d4e31502bbc9",
"0x7bce2d19e7712cf7deb416b3047bba54ea98bf66237dcfd5f6f407610e309425",
"0x42b300241af5c5f30d2a5fe37d94428de05ab82db74b2464133cd83b190d1951",
"0xa18442aa43fc7647c01e6f6379f7ab92a3127dbd0672cca9cb1427f2fdace10a",
"0x5c046d9565897c7101c1edb84370bc456714b0f80c2c50538d0bedcd9327f5b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

