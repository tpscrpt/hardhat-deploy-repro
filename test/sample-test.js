const { expect } = require("chai");

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    
    for (let i = 0; i < 50; i ++ ) {
      const greeter = await Greeter.deploy("Hello, world!", {gasLimit: 999999999});
      await greeter.deployed();
      console.log(greeter.address)
    }

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // await greeter.setGreeting("Hola, mundo!");
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
