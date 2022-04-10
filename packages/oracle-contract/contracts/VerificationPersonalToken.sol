//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Dependencies/OnlyMainContract.sol";

contract VerificationPersonalToken is OnlyMainContract {
    // VerificationToken
    struct PersonalToken {
        uint256 tokenId;
        address user;
        string[] countries;
        bool passed;
    }
    PersonalToken[] public personalTokens;
    mapping(address => uint256) private verificationIds;
    uint256 private totalSupply = 0;

    // Events
    event Created(uint256 tokenId, address indexed user, bool passed);

    constructor() {}

    function create(
        address user,
        string[] memory countries,
        bool passed
    ) public onlyMainContract {
        require(verificationIds[user] == 0, "User already exist!");

        uint256 tokenId = totalSupply + 1;

        verificationIds[user] = tokenId;

        PersonalToken memory p;
        p.tokenId = tokenId;
        p.user = user;
        p.countries = countries;
        p.passed = passed;
        personalTokens.push(p);

        // increment totalSupply
        totalSupply = totalSupply + 1;

        emit Created(tokenId, user, passed);
    }

    function modify(address user, bool passed) public onlyMainContract {}

    function list() public view onlyMainContract returns (bytes memory) {
        return (abi.encode(personalTokens));
    }

    function verify(address target)
        public
        view
        onlyMainContract
        returns (bool)
    {
        // Verify
        uint256 tokenId = verificationIds[target];
        if (tokenId == 0) {
            // token doesn't exist.
            return false;
        }

        return personalTokens[tokenId].passed;
    }
}
