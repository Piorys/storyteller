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
    address public moderator;
    address[] public moderators;
    mapping(address => bool) public approvers;

    //MODIFIERS - USER ACCESS
    //Administrator - the highest tier of access, can appoint and revoke moderators
    modifier admin(){
        require(msg.sender == administrator);
        _;
    }
    //Moderator - User with access to moderate stories, appointed only by administrator
    modifier moderatorAcc(){
        require(checkIfModerator(msg.sender));

        _;
    }

    function Storyteller() public {
        administrator = msg.sender;
    }

    function checkIfModerator(address user) view public returns (bool){
      for(uint i = 0; i<moderators.length; i++){
        if(moderators[i] == user){
          return true;
        }else{
          continue;
        }
        return false;
      }
    }


    function createStory(string tittle, string story, address author)
        public {
            /* STRUCT:
            string tittle;
            string story;
            address author;
            uint rating;
            mapping(address => bool) raters;
            */
            Story memory newStory = Story({
                tittle: tittle,
                story: story,
                author: author,
                rating: 0
            });
        stories.push(newStory);
    }


}
