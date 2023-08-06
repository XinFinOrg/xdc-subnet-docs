---
sidebar_label: "5. Grand Master Manual: CLI"
sidebar_position: 6
---

# Grand Master Manual: CLI

## Overview

The master nodes are managed by the XDCValidator smart contract. The contract records the list of master nodes and provide functions to be called by the grand master to make changes to the list. The functions include propose, resign, vote, unvote, and withdraw, and the following sections will introduce them in details.

At the gap block (block number `n` such that `n%Epoch=Epoch-Gap`), the XDC program will query the list of master nodes from the contract and will store the list in a snapshot. Then at the next epoch switch block (block round `r` and parent block round `r_parent` such that `r, r_parent` are across two epochs) that is at least `Gap` blocks after the aforementioned gap block, the new candidate list be chosen from the first 108 nodes (ordered by cap) from the list in the snapshot and they become the master nodes for the following epoch.

The following sections introduce the smart contract functions that the grand master can call to make changes to the master nodes.

## Propose

Function format: `propose(address _candidate)`. That is, the function takes the address of the proposed candidate as input.

The grand master can propose any non-candidate address and make it become a candidate. The owner will be the grand master and the candidate's cap will be the value transfered by this transaction. Finally, the contract emits a `Propose` event.

Only the grand master can call this function (modifier `onlyGrandMaster`) and the value of the transaction has to be no less than a constant `minCandidateCap`. This means the grand master should have balance no less than `minCandidateCap`.

## Resign

Function format: `resign(address _candidate)`. That is, the function takes the candidate's address as input.

The grand master (also the owner of the candidate) calls this function to resign a candidate. More specifically, the contract marks the candidate as no longer active, removes the candidate from the list of candidates, and sets up a refund mechanism for the owner. The contract records the withdraw block number, which is current number plus a constant delay `candidateWithdrawDelay`. It also records the withdraw index for the caller, that is, the index of withdraw entries this caller possesses. Finally, it emits a `Resign` event.

Only the owner (that is, the grand master) can call this function (modifier `onlyOwner`).

As for how to withdraw the refund, please refer to the Withdraw section.

## Vote

Function format: `vote(address _candidate)`. That is, the function takes the address of the candidate being voted for as input.

The grand master can vote a candidate to increase its cap by transftering a certain amount of value in the transaction. Finally, the contract emits a `Vote` event.

Only the grand master can call this function (modifier `onlyGrandMaster`) and the value of the transaction has to be no less than a constant `minVoterCap`. In addition, the address must already be a candidate.

## Unvote

Function format: `unvote(address _candidate, uint256 _cap)`. That is, the function takes the candidate's address and the amount of cap to be unvoted as inputs.

The grand master call this function to reduce its cap for a candidate. More specifically, the contract can subtract the unvoted cap from the candidate's cap and set up a refund mechanism by recording the unvoted cap to be withdrawn after a certain delay. It records the withdraw block number, which is current number plus a constant delay `voterWithdrawDelay`. It also records the withdraw index for the caller, that is, the index of withdraw entries this caller possesses. Finally, it emits an `Unvote` event.

Only the valid voter (that is, the grand master) can call this function (modifier `onlyValidVote`). In addition, the candidate must have voter cap no less than `_cap`.

## Withdraw

Function format: `withdraw(uint256 _blockNumber, uint _index)`. That is, the function takes the block number and index of the withdrawal as inputs.

This function allows users to withdraw their refunded caps after a certain delay. It checks the validity of the withdrawal based on the provided block number and index. If the withdrawal is valid, the function transfers the withdrawn cap to the caller and emits a `Withdraw` event.

The current block number must be no less than `_blockNumber` in order to make the withdraw.

## Instruction

This section provides the nodejs codes for the grand master to call the functions. First, you need the code to import the dependencies and prepare some variables:

```javascript
const { Web3 } = require('web3');
const abi = require('ethereumjs-abi');
const EthereumTx = require('ethereumjs-tx').Transaction

const grandPrivateKey = Buffer.from(
        'your grand master private key in hex format',
        'hex',
    );
const grandAddr = '0x your grand master address in hex format';
const candidate = '0x the candidate address';
```

### Send a transaction of propose:

```javascript
async function main () {
    const web3 = new Web3('http://ip:port');
    
    const nonce = await web3.eth.getTransactionCount(grandAddr);
    const encodedData = '0x' + abi.simpleEncode("propose(address)", candidate).toString('hex');
    const txParams = {
        nonce: Number(nonce),
        gasPrice: 250000000, // change it if you like
        gasLimit: 220000, // change it if you like
        to: '0x0000000000000000000000000000000000000088',
        value: '0x84595161401484a000000',
        data: encodedData,
    };
    const tx = new EthereumTx(txParams, {'chain':'mainnet', 'hardfork': 'homestead'}); // hardfork homestead is critical to make it work!
    tx.sign(grandPrivateKey);
    const serializedTx = '0x' + tx.serialize().toString('hex');
    console.log('propose for candidate', candidate, 'tx params', txParams, 'serialized', serializedTx);

    web3.eth.sendSignedTransaction(serializedTx)
    .on('transactionHash',(hash) => {
        console.log('txHash:', hash)
    })
    .on('error', console.error);

    console.log("send tx finish");
}

main().then(console.log).catch(console.error)
```

### Send a transaction of resign:

```javascript
async function main () {
    const web3 = new Web3('http://ip:port');
    
    const nonce = await web3.eth.getTransactionCount(grandAddr);
    const encodedData = '0x' + abi.simpleEncode("resign(address)", candidate).toString('hex');
    const txParams = {
        nonce: Number(nonce),
        gasPrice: 250000000, // change it if you like
        gasLimit: 220000, // change it if you like
        to: '0x0000000000000000000000000000000000000088',
        value: '0x0',
        data: encodedData,
    };
    const tx = new EthereumTx(txParams, {'chain':'mainnet', 'hardfork': 'homestead'}); // hardfork homestead is critical to make it work!
    tx.sign(grandPrivateKey);
    const serializedTx = '0x' + tx.serialize().toString('hex');
    console.log('resign for candidate', candidate, 'tx params', txParams, 'serialized', serializedTx);

    web3.eth.sendSignedTransaction(serializedTx)
    .on('transactionHash',(hash) => {
        console.log('txHash:', hash)
    })
    .on('error', console.error);

    console.log("send tx finish");
}

main().then(console.log).catch(console.error)
```

### Send a transaction for vote:

```javascript
async function main () {
    const web3 = new Web3('http://ip:port');
    
    const nonce = await web3.eth.getTransactionCount(grandAddr);
    const encodedData = '0x' + abi.simpleEncode("vote(address)", candidate).toString('hex');
    const txParams = {
        nonce: Number(nonce),
        gasPrice: 250000000, // change it if you like
        gasLimit: 220000, // change it if you like
        to: '0x0000000000000000000000000000000000000088',
        value: '0x54b40b1f852bda00000',
        data: encodedData,
    };
    const tx = new EthereumTx(txParams, {'chain':'mainnet', 'hardfork': 'homestead'}); // hardfork homestead is critical to make it work!
    tx.sign(grandPrivateKey);
    const serializedTx = '0x' + tx.serialize().toString('hex');
    console.log('vote for candidate', candidate, 'tx params', txParams, 'serialized', serializedTx);

    web3.eth.sendSignedTransaction(serializedTx)
    .on('transactionHash',(hash) => {
        console.log('txHash:', hash)
    })
    .on('error', console.error);

    console.log("send tx finish");
}

main().then(console.log).catch(console.error)
```

### Send a transaction for unvote:

```javascript
const unvoteCap = 25000000000000000000000; // change it if you like
async function main () {
    const web3 = new Web3('http://ip:port');
    
    const nonce = await web3.eth.getTransactionCount(grandAddr);
    const encodedData = '0x' + abi.simpleEncode("unvote(address,uint256)", candidate, unvoteCap).toString('hex');
    const txParams = {
        nonce: Number(nonce),
        gasPrice: 250000000, // change it if you like
        gasLimit: 220000, // change it if you like
        to: '0x0000000000000000000000000000000000000088',
        value: '0x0',
        data: encodedData,
    };
    const tx = new EthereumTx(txParams, {'chain':'mainnet', 'hardfork': 'homestead'}); // hardfork homestead is critical to make it work!
    tx.sign(grandPrivateKey);
    const serializedTx = '0x' + tx.serialize().toString('hex');
    console.log('unvote for candidate', candidate, 'tx params', txParams, 'serialized', serializedTx);

    web3.eth.sendSignedTransaction(serializedTx)
    .on('transactionHash',(hash) => {
        console.log('txHash:', hash)
    })
    .on('error', console.error);

    console.log("send tx finish");
}

main().then(console.log).catch(console.error)
```

### Send a transaction for withdraw:

```javascript
const blockNumber = 0; // change it to the withdraw block number (get it from getWithdrawBlockNumbers())
const index = 0; // change it to the withdraw index (get it from getWithdrawBlockNumbers())
async function main () {
    const web3 = new Web3('http://ip:port');
    
    const nonce = await web3.eth.getTransactionCount(grandAddr);
    const encodedData = '0x' + abi.simpleEncode("withdraw(uint256,uint)", blockNumber, index).toString('hex');
    const txParams = {
        nonce: Number(nonce),
        gasPrice: 250000000, // change it if you like
        gasLimit: 220000, // change it if you like
        to: '0x0000000000000000000000000000000000000088',
        value: '0x0',
        data: encodedData,
    };
    const tx = new EthereumTx(txParams, {'chain':'mainnet', 'hardfork': 'homestead'}); // hardfork homestead is critical to make it work!
    tx.sign(grandPrivateKey);
    const serializedTx = '0x' + tx.serialize().toString('hex');
    console.log('withdraw at number', blockNumber, 'tx params', txParams, 'serialized', serializedTx);

    web3.eth.sendSignedTransaction(serializedTx)
    .on('transactionHash',(hash) => {
        console.log('txHash:', hash)
    })
    .on('error', console.error);

    console.log("send tx finish");
}

main().then(console.log).catch(console.error)
```