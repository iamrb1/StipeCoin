const hre = require("hardhat");

async function main() {
  const StipeCoin = await hre.ethers.getContractFactory("OceanToken");
  const stipeCoin = await StipeCoin.deploy(70000000, 7)

  await stipeCoin.deployed();

  console.log("Stipe Coin deployed: ", stipeCoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
