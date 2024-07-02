const hre = require("hardhat");

async function main() {
  console.log("Getting contract factory...");
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");

  console.log("Deploying contract...");
  const crowdFunding = await CrowdFunding.deploy();

  console.log("Waiting for deployment...");
  await crowdFunding.deployed();

  console.log(`CrowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error("Error in deployment script:", error);
  process.exitCode = 1;
});
