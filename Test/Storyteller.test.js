const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledContract = require('../ethereum/Build/Storyteller.json');

//TODO figure out memoryLeak error from Node

let storyteller;
let accounts;
let firstUser;

beforeEach(async ()=>{
  accounts = await web3.eth.getAccounts();
  storyteller = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({data: compiledContract.bytecode})
    .send({from: accounts[0], gas: "3000000"});

});

describe('Storyteller',()=>{
    it('deploys to blockchain',()=>{
      assert.ok(storyteller.options.address);
    });
    it('recognizes creator of the contract as administrator',async ()=>{
      const administrator = await storyteller.methods.administrator().call();
      const sender = accounts[0];
      assert.equal(administrator,sender);
    });
    it('allows user to create profiles',async ()=>{
      const profileCreated = await storyteller.methods.createProfile('Test User').send({
        from: accounts[1],
        gas: '1000000'
      });
      firstUser = await storyteller.methods.users(0).call();
      assert(profileCreated);
      assert('Test User',firstUser.nickname);
      assert(accounts[1],firstUser.userAddress);
    });
    it('Allows users with created profile to post a story',async ()=>{
      //Create a Profile
      const profileCreated = await storyteller.methods.createProfile('Test User').send({
        from: accounts[1],
        gas: '1000000'
      });
      //Create a story with this profile
      const createdStory = await storyteller.methods.createStory(
        'Test tittle',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[1],
        gas: '1000000'
      });

      const getCreatedStory = await storyteller.methods.stories(0).call();

    });
    it('Prohibits unregistered users from posting a story',async ()=>{
      //Try to create a story with unregistered profile
      try{
      const createdStory = await storyteller.methods.createStory(
        'Test tittle2',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[2],
        gas: '1000000'
      });
      assert(false);
    }catch(error){
      assert(error);
    };
    });
    it('Allows user with created profile to upvote stories.',async ()=>{
      //Create a Profile 1
      const firstProfile = await storyteller.methods.createProfile('Test User').send({
        from: accounts[1],
        gas: '1000000'
      });
      //Create a Profile 2
      const secondProfile = await storyteller.methods.createProfile('Test User').send({
        from: accounts[2],
        gas: '1000000'
      });
      //Create a story with first profile
      const storyCreation = await storyteller.methods.createStory(
        'Test tittle2',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[1],
        gas: '1000000'
      });
      //Upvote created Story
      const upvote = await storyteller.methods.upvoteStory(0).send({
        from: accounts[2],
        gas: '100000'
      });
      const getCreatedStory = await storyteller.methods.stories(0).call();
      const author = await storyteller.methods.users(1).call();
      //Upvoting should increment rating of both story and user
      //Check rating of story
      assert('1',getCreatedStory.rating);
      assert('1',author.userRating);
    });

    it('Allows user with created profile to downvote stories.',async ()=>{
      //Create a Profile 1
      const firstProfile = await storyteller.methods.createProfile('Test User 1').send({
        from: accounts[1],
        gas: '1000000'
      });
      //Create a Profile 2
      const secondProfile = await storyteller.methods.createProfile('Test User 2').send({
        from: accounts[2],
        gas: '1000000'
      });
      //Create a Profile 3
      const thirdProfile = await storyteller.methods.createProfile('Test User 3').send({
        from: accounts[3],
        gas: '1000000'
      });
      //Create a story with first profile
      const storyCreation = await storyteller.methods.createStory(
        'Test tittle2',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[1],
        gas: '1000000'
      });
      //Upvote created Story with secon profile
      const upvote = await storyteller.methods.upvoteStory(0).send({
        from: accounts[2],
        gas: '100000'
      });
      //Downvote the Story with third profile
      const downvote = await storyteller.methods.downvoteStory(0).send({
        from: accounts[2],
        gas: '100000'
      });
      const getCreatedStory = await storyteller.methods.stories(0).call();
      const author = await storyteller.methods.users(1).call();
      //Upvoting should increment rating of both story and user
      //Check rating of story
      assert('0',getCreatedStory.rating);
      assert('0',author.userRating);
    });

    it('Prohibits unregistered users from upvoting stories.',async ()=>{
      //Create a Profile 1
      const firstProfile = await storyteller.methods.createProfile('Test User').send({
        from: accounts[1],
        gas: '1000000'
      });
      //Create a story with first profile
      const storyCreation = await storyteller.methods.createStory(
        'Test tittle2',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[1],
        gas: '1000000'
      });
      try{
      //Upvote created Story
      const upvote = await storyteller.methods.upvoteStory(0).send({
        from: accounts[2],
        gas: '100000'
      });
      assert(false);
    }catch(err){
      assert(err);
    };
    });

    it('Prohibits unregistered users from downvoting stories.',async ()=>{
      //Create a Profile 1
      const firstProfile = await storyteller.methods.createProfile('Test User').send({
        from: accounts[1],
        gas: '1000000'
      });
      //Create a story with first profile
      const storyCreation = await storyteller.methods.createStory(
        'Test tittle2',
        'Lorem Ipsum Dolor Sit Amet'
      ).send({
        from: accounts[1],
        gas: '1000000'
      });
      try{
      //Upvote created Story
      const downvote = await storyteller.methods.downvoteStory(0).send({
        from: accounts[2],
        gas: '100000'
      });
      assert(false);
    }catch(err){
      assert(err);
    };
    });


});
