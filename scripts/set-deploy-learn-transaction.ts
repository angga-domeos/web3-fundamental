import { network } from "hardhat";

const {ethers} = await network.create()

const factory = await ethers.getContractFactory(
    "LearnTransaction"
)

const contract = await factory.attach('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')

const tx = await contract.setText("angga")
console.log("tx hash", tx.hash)
await tx.wait()
const nama = await contract.textRaw();
console.log("Nama:", nama)