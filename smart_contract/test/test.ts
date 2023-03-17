import { expect } from 'chai';
import { ethers } from "hardhat";

describe("KissanCoins", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("KissanCoins");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("Kissan Coins");
  });
});
