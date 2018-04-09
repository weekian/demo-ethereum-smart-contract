pragma solidity ^0.4.0;

contract MySimpleToken {
    address public creator;
    uint256 public totalSupply;
    mapping (address => uint256) public balances;

    function MySimpleToken() public {
        creator = msg.sender;
        totalSupply = 1000;
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address owner) public constant returns (uint256) {
        return balances[owner];
    }

    function sendToken(address receiver, uint amount) public returns (bool) {
        address owner = msg.sender;

        require(amount > 0);
        require(balances[owner] >= amount);

        balances[owner] -= amount;
        balances[receiver] += amount;

        return true;
    }
}