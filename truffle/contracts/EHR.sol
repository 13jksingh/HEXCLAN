// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EHR {
    address public owner;

    constructor () public{
        owner = msg.sender;
    }

    function isOwner() public {
        return (msg.sender == owner);
    }

    struct Patient {
        name memory string,
        age uint,

    }
}