# To reproduce
`yarn hardhat node`

`yarn hardhat run scripts/sample-script.js --network localhost`

Above should fail at 13 deployments of Greeter.sol.

`yarn hardhat run scripts/sample-script.js --network localhost`

But when you run it again, it deploys all 50.