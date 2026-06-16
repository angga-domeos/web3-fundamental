import {network} from "hardhat";

const connections = await network.create();
const {ethers} = connections;

const factory = await ethers.getContractFactory(
    "LearnVisibilityAndStorage"
)

const contract = await factory.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');

const tx = await contract.setMahasiswa("angga", 23);
console.log("tx hash", tx.hash);
await tx.wait();

const _money =  await contract.setUangMahasiswa(1000000);
console.log("money:",_money);
await _money.wait();


const name = await contract.nameMahasiswa();
console.log("nama mahasiswa: ", name)

const age = await contract.ageMahasiswa()
console.log("umur mahasiswa: ", age)