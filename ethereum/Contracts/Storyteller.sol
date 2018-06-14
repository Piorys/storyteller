pragma solidity ^0.4.17;

contract Storyteller {

    struct Story {
        string tittle;
        string story;
        address authorAddress;
        string authorName;
        uint rating;
        mapping(address => bool) raters;
        uint id;
    }

    struct Profile {
      string nickname;
      address userAddress;
      uint userRating;
    }

    Story[] public stories;
    Profile[] public users;
    Story[] public userStories;
    address public administrator;
    mapping(address => Profile) public userBase;
    uint public storyCount;
    uint public userCount;

    //MODIFIERS - USER ACCESS
    //Administrator - the highest tier of access, can appoint and revoke moderators
    modifier admin(){
        require(msg.sender == administrator);
        _;
    }

    //User - only users with created accounts are allowed
    modifier userAcc(){
        require(checkIfUserExist(msg.sender));
        _;
    }


    //Contructor function, does not require any initial props
    function Storyteller() public {
        administrator = msg.sender;
    }

    function checkIfUserExist(address user) view public returns (bool){
      for(uint i=0; i<users.length;i++){
        if(users[i].userAddress == user){
          return true;
        }
      }
      return false;
    }

    /* A little nasty workaround as solidity does not allow to return array of
     structs. this function updates public arrat userStories that can be accessed
     next */
    function getUserStories(address user) public {
        for(uint i =0; i<stories.length;i++){
            if(stories[i].authorAddress == user){
                userStories.push(stories[i]);
            }
        }
    }

    function createStory(string tittle, string story) userAcc
        public {
            Profile storage author = userBase[msg.sender];
            if(bytes(story).length < 255 && bytes(tittle).length < 50){
              Story memory newStory = Story({
                  tittle: tittle,
                  story: story,
                  authorAddress: author.userAddress,
                  authorName: author.nickname,
                  rating: 0,
                  id: storyCount+1
              });
          stories.push(newStory);
          storyCount++;
            }else{
              revert();
            }
    }

    function createProfile(string nickname) public returns (bool) {
      if(!checkIfUserExist(msg.sender)){
      Profile memory newUser = Profile({
        nickname: nickname,
        userAddress: msg.sender,
        userRating: 0
        });
      users.push(newUser);
      userCount++;
      userBase[msg.sender] = newUser;
      return true;
    }else{
      revert();
    }
  }

  function upvoteStory(uint storyIndex) userAcc public {
    Story storage story = stories[storyIndex];
    require(!story.raters[msg.sender]);
    story.rating++;
    upvoteUser(story.authorAddress);
    story.raters[msg.sender] = true;
  }

  function downvoteStory(uint storyIndex) userAcc public {
    Story storage story = stories[storyIndex];
    story.rating--;
    story.raters[msg.sender] = true;
  }

  function upvoteUser(address user) private {
    Profile storage profile = userBase[user];
    profile.userRating++;
  }

  function downvoteUser(address user) private {
    Profile storage profile = userBase[user];
    profile.userRating--;
  }
  }
