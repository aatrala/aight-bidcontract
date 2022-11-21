# aight-bidcontract
Stores the bid contract for storing the bid amount and art text of Aight platform

Steps:
Contract is deployed to aightartnftv2.testnet

Build Commands
> npm install
>  node node_modules/near-sdk-js/cli/cli.js build src/contract.ts build/build.wasm
   61 

Deploy commands
> npm install -g near-cli
> near login
> near deploy --wasmFile build/contract.wasm --accountId aightartnftv2.testnet

