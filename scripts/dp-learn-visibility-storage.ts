import {  network } from "hardhat";

const connections = await network.create();
const {ethers} = connections;

async function main() {
    console.log(`deploy to ${connections.networkName}...`);

    const learnVS = await ethers.deployContract("LearnVisibilityAndStorage");

    console.log("waiting for the deployment tx to confirm");
    await learnVS.waitForDeployment();

    console.log("Contract address:", await learnVS.getAddress());
    console.log("Deployment successful!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})