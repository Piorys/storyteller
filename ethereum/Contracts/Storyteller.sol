pragma solidity ^0.4.17;

contract Storyteller {

    struct Story {
        string tittle;
        string story;
        address author;
        uint rating;
        mapping(address => bool) raters;
    }

    Story[] public stories;
    address public administrator;
    mapping(address => bool) public approvers;

    modifier restricted(){
        require(msg.sender == administrator);
        _;
    }

    function Storyteller() public {
        administrator = msg.sender;
    }

    function contribute() payable public {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createStory(string tittle, string story, , uint value,address recipient)
        public restricted {
            /* require(approvers[msg.sender]); */
            Request memory newRequest = Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });
        requests.push(newRequest);
    }


}
