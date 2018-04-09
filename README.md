# Solidity Simple Token
Demo Smart Contract using Solidity, Truffle Framework

## Setting up testing development environment using testrpc
```
ganache-cli
```
Runs a test network. Note the port that it is listening to and ensure it is the same as the port
specified in truffle.js under the development variable

## Deploying to test development environment using truffle framework
```
truffle compile
```
To compile the necesssary files and outputs them to the build directory
```
truffle migrate --network development
```
Deploys the contract onto the test environment previously setup
```
truffle console
```
Opens up the console for interacting with the contract
```
account0 = web3.eth.accounts[0]
account1 = web3.eth.accounts[1]
```
Assigns the first 2 accounts to the account0 and account1 variables
```
MySimpleToken.deployed().then(inst => {token = inst})
```
Assigns a reference to the contract that truffle deployed to the network
```
token.balanceOf(account0)

> BigNumber { s: 1, e: 3, c: [ 1000 ] }
```
Displays the balance of the account0. To transfer tokens, run
```
token.sendToken(account1, 200)

> { tx: '0xe07d4e89eb04c689e9af81ff7c30a61444551cf43fe6e0cc19df97d476f6e588',
  receipt: 
   { transactionHash: '0xe07d4e89eb04c689e9af81ff7c30a61444551cf43fe6e0cc19df97d476f6e588',
     transactionIndex: 0,
     blockHash: '0x2dfb22298381bc7c93dbc036588b859f357c85cc94771d56db5380a5977741f3',
     blockNumber: 5,
     gasUsed: 49224,
     cumulativeGasUsed: 49224,
     contractAddress: null,
     logs: [],
     status: '0x01',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }
```
Then run the following command to see the new balances of account0 and account1
```
token.balanceOf(account0)

> BigNumber { s: 1, e: 2, c: [ 800 ] }

token.balanceOf(account1)

> BigNumber { s: 1, e: 2, c: [ 200 ] }