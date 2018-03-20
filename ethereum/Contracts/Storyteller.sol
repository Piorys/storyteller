pragma solidity ^0.4.17;

contract Storyteller {

    struct Story {
        string tittle;
        string story;
        address author;
        uint rating;
        mapping(address => bool) raters;
    }

    struct Profile {
      string nickname;
      address userAddress;
      uint rating;
    }

    Story[] public stories;
    Profile[] public users;
    address public administrator;
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
        }
              }
      return false;
    }

    function checkIfUserExist(address user) view public returns (bool){
      for(uint i=0; i<users.length;i++){
        if(users[i].userAddress == user){
          return true;
        }
      }
      return false;
    }

    function addModerator(address newModerator) public admin {
      moderators.push(newModerator);
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

    function createProfile(string nickname,address userAddress) public returns (bool) {
      if(!checkIfUserExist(userAddress)){
      /* STRUCT
      string nickname;
      address userAddress;
      uint rating;
      */
      Profile memory newUser = Profile({
        nickname: nickname,
        userAddress: userAddress,
        rating: 0
        });
      users.push(newUser);
      return true;
    }else{
      return false;
    }
  }
  }
