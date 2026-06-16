import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm";

async function connectWallet() {
    if (!window.ethereum) {
        alert("Silakan install MetaMask");
        return;
    }

    try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        await provider.send("eth_requestAccounts", []);

        const signer = await provider.getSigner();

        const address = await signer.getAddress();

        const balance = await provider.getBalance(address);

        const blockNumber = await provider.getBlockNumber();

        console.log("Address:", address);

        console.log(
            "Balance:",
            ethers.formatEther(balance),
            "ETH"
        );

        console.log(
            "Block Number:",
            blockNumber
        );

    } catch (err) {
        console.error(err);
    }
}

document
    .getElementById("connectWallet")
    .addEventListener("click", connectWallet);