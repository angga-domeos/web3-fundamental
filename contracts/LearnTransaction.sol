// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract LearnTransaction {

    string public textRaw;
    address private owner;
    uint256 public angka;

    constructor() {
        owner = msg.sender;
    }

    function setText(string calldata _text) external {
        textRaw = _text;
    }

    function increment() external {
        require(msg.sender == owner, "you not owner");
        angka++;
    }

    function getPemilik() public view returns(address) {
        return owner;
    }
}