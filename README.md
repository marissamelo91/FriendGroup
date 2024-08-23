# FriendGroup

# Description
This project provides a RESTful API for a social media application. It allows users to manage their profiles, friends, and thoughts, and to interact with thoughts via reactions.

## API Endpoints
User Routes <br>
1. Get All Users <br>
Endpoint: GET /api/users <br>
Description: Retrieves a list of all users. <br>
Response: Array of user objects.<br>
2. Get User by ID<br>
Endpoint: GET /api/users/:userId<br>
Description: Retrieves a single user by their ID.<br>
Params:
userId (String): The ID of the user.<br>
Response: User object or error message if not found.<br>
3. Create User<br>
Endpoint: POST /api/users<br>
Description: Creates a new user.<br>
Request Body: User object (e.g., { "name": "John Doe", "email": "john@example.com" })<br>
Response: Created user object.<br>
4. Update User<br>
Endpoint: PUT /api/users/:userId<br>
Description: Updates an existing user.<br>
Params:
userId (String): The ID of the user to update.<br>
Request Body: Updated user object.<br>
Response: Updated user object or error message if not found.<br>
5. Delete User<br>
Endpoint: DELETE /api/users/:userId<br>
Description: Deletes a user by ID.<br>
Params:
userId (String): The ID of the user to delete.<br>
Response: Success message or error message if not found.<br>
6. Add Friend<br>
Endpoint: POST /api/users/:userId/friends/:friendId<br>
Description: Adds a friend to a user's friend list.<br>
Params:
userId (String): The ID of the user adding a friend.<br>
friendId (String): The ID of the user to be added as a friend.<br>
Response: Updated user object.<br>
7. Delete Friend<br>
Endpoint: DELETE /api/users/:userId/friends/:friendId<br>
Description: Removes a friend from a user's friend list.<br>
Params:
userId (String): The ID of the user removing a friend.<br>
friendId (String): The ID of the friend to be removed.<br>
Response: Updated user object.<br>
Thought Routes<br>
1. Get All Thoughts<br>
Endpoint: GET /api/thoughts<br>
Description: Retrieves a list of all thoughts.<br>
Response: Array of thought objects.<br>
2. Get Thought by ID<br>
Endpoint: GET /api/thoughts/:thoughtId<br>
Description: Retrieves a single thought by its ID.<br>
Params:
thoughtId (String): The ID of the thought.<br>
Response: Thought object or error message if not found.<br>
3. Create Thought<br>
Endpoint: POST /api/thoughts<br>
Description: Creates a new thought.<br>
Request Body: Thought object (e.g., { "text": "This is a thought", "userId": "12345" })<br>
Response: Created thought object.<br>
4. Update Thought<br>
Endpoint: PUT /api/thoughts/:thoughtId<br>
Description: Updates an existing thought.<br>
Params:
thoughtId (String): The ID of the thought to update.<br>
Request Body: Updated thought object.<br>
Response: Updated thought object or error message if not found.<br>
5. Delete Thought<br>
Endpoint: DELETE /api/thoughts/:thoughtId<br>
Description: Deletes a thought by ID.<br>
Params:
thoughtId (String): The ID of the thought to delete.<br>
Response: Success message or error message if not found.<br>
6. Create Reaction<br>
Endpoint: POST /api/thoughts/:thoughtId/reactions<br>
Description: Adds a reaction to a thought.<br>
Params:
thoughtId (String): The ID of the thought to react to.<br>
Request Body: Reaction object (e.g., { "reactionId": "67890", "text": "This is a reaction" })<br>
Response: Updated thought object.<br>
7. Delete Reaction<br>
Endpoint: DELETE /api/thoughts/:thoughtId/reactions/:reactionId<br>
Description: Deletes a reaction from a thought.<br>
Params:
thoughtId (String): The ID of the thought.<br>
reactionId (String): The ID of the reaction to delete.<br>
Response: Updated thought object.<br>

## Install
1. Clone the Repository <br>
2. Install the dependencies - npm install <br>
3. Start the server - npm start <br>

## Walkthrough Video

## Credits
Class Lectures<br>
Tutor Session<br>
Classmates - Thinh Nguyen and Faiza Haque<br>
AI Tools - CHATGPT, Amazon Q, and Copilot<br>
