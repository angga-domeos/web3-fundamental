import {network} from "hardhat";

const connections = await network.create();
const {ethers} = await connections;

const factory = await ethers.getContractFactory(
    "LearnVisibilityAndStorage"
)

const contract = await factory.attach('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9');

const _money = await contract.getDaftarBeasiswa();
console.log("validasi:", _money)