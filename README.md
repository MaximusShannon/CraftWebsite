# Assignment 1 - API testing and Source Control.

Name: Max Shannon

## Overview.

The API is built and will be further built on the idea of a webapp where the user creates a profile of themselves (or basically their craft shop) from their
shop they will be able to create posts (users of this website will be interested in Arts and Crafts. Time and time again I see people using Facebook for this
and their popularity doesn't grow so I intend to give the user the option and put it all in the one place.

## API endpoints.

Since I haven't implemented MongoDB into my project yet I used temporary Data

I know that the endpoints shouldn't be capatilzed, i started this project and will change when I revamp and add the mongodb

 ++++ User Data Endpoints ++++

/GETs
/TemporaryUsers - finds all the temporary users
/TemporaryUsers/:id - finds a user on a given users id - will fail if the correct Id is not given.

/POST
/TemporaryUsers - adds a user to the temporary collection - wont add if it doesn't send complete data and will respond with a failure message

/PUT
/TemporaryUsers/:id/bio - updates the users bio by a selectedId given, will send back a message if the user did not exist

/DELETE
/TemporaryUsers/:id - deletes a user by the id given, will send back a message if a user did not exist.

++++ Post Data Endpoints ++++
/GETs
/TemporaryPosts - finds all the Temporary Posts

/TemporaryPosts/:id - finds all the Temporary Posts - will fail if the correct id is not given

/TemporaryPostsByTags/:tags - inside the post object there is a property of type tags, inside these tags the user is able to set their own tags for their profile and/or post they create
this endpoint can search for a tag - (Example Cards) and will return any posts with the word Cards in their tags - it will also fail and return a message if no tags exist

/TemporaryPostsByLowerPrice/:price - this will return any posts that have a lower price property than given - it will also fail if no posts meet the criteria and send a message back


## Sample Test execution.
C:\MeanStackDevelopment\CraftDesignDisplay>npm test

    > craftdesigndisplay@0.0.0 test C:\MeanStackDevelopment\CraftDesignDisplay
    > set NODE_ENV=test && mocha Tests/routes/UserApiTests.js && mocha Tests/routes/PostApiTests.js

      Users
        GET /TemporaryUsers
          √ should return all the users in the users array
        GET /TemporaryUsers/:id
          √ should return the user with 1000 as an id
          √ should return a message if a invalid id is given
        POST /TemporaryUsers
          √ Should add a new user to the array of users
          √ Should fail if all of userName, email or password is not given
          √ should fail if one of the userName, email or password is not given
        PUT /TemporaryUsers
          √ Should update the users bio
          √ Should fail when trying to update a users bio who isnt real
        DELETE /TemporaryUser/:id
          √ Should send a message of User Deleted after user has been removed
          √ Should return the size of the array which should be smaller after an item is deleted
          √ Should fail when trying to delete a user which does not exist

      11 passing (53ms)

      Posts
        GET /TemporaryPosts
          √ Should get all the posts in the posts array
        GET /TemporaryPosts/:postId
          √ Should return the user with 1000 as an id
          √ Should fail when an invalid id is given
        GET /TemporaryPostsByTags/:tags
          √ Should return the post with the tag Cards in the tags property
          √ Should return a message if the criteria does not meet
        GET /TemporaryPostsByLowerPrice/:price
          √ Should return all the posts lower than the price given
          √ Should return no posts because price given is lower than both posts


  7 passing (38ms)


## Extra features.

Unfortunately I don't have any.
