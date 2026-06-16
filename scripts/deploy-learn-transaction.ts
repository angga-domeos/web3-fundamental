import { network } from "hardhat";

const { ethers, networkName } = await network.create();

console.log(`Deploying Learn Tranction to ${networkName}...`);

const learnTransaction = await ethers.deployContract("LearnTransaction");

console.log("Waiting for the deployment tx to confirm");
await learnTransaction.waitForDeployment();

console.log(
    "contract address",
    await learnTransaction.getAddress()
)


console.log("Deployment successful!");