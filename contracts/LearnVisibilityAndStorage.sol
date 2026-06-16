// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract LearnVisibilityAndStorage {

    string public nameMahasiswa;
    uint8 public ageMahasiswa;
    uint256 private uangMahasiswa;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function getMahasiswa() public view returns(string memory, uint8){
       return (
            nameMahasiswa,
            ageMahasiswa
       );
    }

    function setMahasiswa(string calldata _name, uint8 _age ) external {
        require(msg.sender == owner, "you not owner");
        nameMahasiswa = _name;
        ageMahasiswa = _age;
    }

    function setUangMahasiswa(uint256 _money) external {
        require(msg.sender == owner, "you not owner");
        uangMahasiswa = _money;
    }

    function giveBeasiswa() private view returns(string memory) {
        if (uangMahasiswa < 2000000) {
            return "dapat beasiswa";
        } else {
            return "tidak dapat beasiswa";
        }
    }

    function getDaftarBeasiswa() public view returns(string memory) {
        return giveBeasiswa();
    }
    
}