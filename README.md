# SmartCharity documentation

The project consists of three main directories: client, backend, and web3.


In order to run the project locally you need to follow the following steps:

Enter the client directory with `cd client`
Run `yarn` to install the dependencies
Run `yarn start` to build the project
Run `npm i` inside the backend directory
Run `node server.js`
Connect your wallet and refresh the project page



Web3 documentation:
Enter the web3 directory
Run “cargo build –release”
Once the smart contract is built, download the file name.opt.wasm and the meta.txt
Go to idae.gear-tech.io and enter the node of your preference node. (we are using “Vara Stable Testnet”)
Click on Upload new program and select your opt.wasm file and your meta.txt
Enter the Initial values for your FT, calculate the gas and sign the transaction
To verify that your FT is upload correctly, go to “messages” and look for a transaction with your FT name as sender, and if it has a green light, it’s correctly upload to the blockchain

The db currently only includes two tables. We only make inserts into this tables ones we have saved the information on the blockchain, this is the way that we can be 100% sure that our information is accurate.

<img width="707" alt="image" src="https://github.com/MrJ8585/SmartCharity/assets/79416917/b26b5ab6-6aea-4b74-8d34-d2f67c214bff">


Entities of the project and their connections: 
<img width="707" alt="image" src="https://github.com/MrJ8585/SmartCharity/assets/79416917/0ac2e343-d52b-4b11-8129-7aaddcfd37ed">
