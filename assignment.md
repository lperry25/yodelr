
# Yodelr Platform Development Task

## Introduction

Welcome to your development challenge! You are tasked with creating Yodelr, a cutting-edge micro-message communications platform. This project is designed to assess your skills in both front-end and back-end development, using a stack centered around JavaScript, React, and Node.js.

## Project Overview

Yodelr is inspired by the concept of a social messaging platform where users can post short messages and tag their content with topics. Your role is to develop this platform as a full-stack application, implementing both the client-side interface and the server-side API.

### Objectives

- Develop a **React-based front-end** that allows users to interact with the Yodelr platform.
- Implement a **Node.js back-end** (using Express.js or a similar framework) that the front-end will communicate with.
- Create a seamless user experience where front-end dynamically reflects the backend data.

### Features

1. **User Interface**: Design a clean, intuitive UI that reflects modern web application standards.
2. **User Registration**: Allow users to register with a username.
3. **Message Posting**: Users can post messages up to 140 characters with or without topics identified by “#”.
4. **Viewing Posts**: Display all messages from a user, sorted by recent posts.
5. **Trending Topics**: Show popular topics based on message frequency over a specified time frame.

## Technical Requirements

### Front-End

- **Framework**: React
- **Language**: JavaScript or TypeScript
- **State Management**: Your choice (if you feel it is necessary to have one)
- **API Communication**: Fetch API, or any similar library

### Back-End

- **Environment**: Node.js
- **Framework**: Express.js or any framework you are comfortable with
- **Data Storage**: In-memory storage (no persistent database required)
- **API**: Design a RESTful API to handle the necessary operations.

## Tasks

### Back-End

1. **Set up your Node.js server** using the framework of your choice or use the guide that is provided.
2. **Implement the API** with the following endpoints:
    - POST `/posts` - Create a new post.
    - GET `/posts` - Get all posts
    - GET `/posts/topic/{topic}` - Retrieve posts for a specific topic.

### Front-End

1. **Design a Wireframe:** Before coding, sketch out a basic wireframe for the Yodelr user interface. This could be a hand-drawn sketch, or you could use a free online wire-framing tool. Consider:
    - Navigation
    - Post creation with or without hashtag input
    - Post display (username, timestamp, post)
    - Any other components you think would be interesting to have.
2. **Develop the UI** with React and TypeScript, ensuring it is responsive and user-friendly.
3. **Implement the necessary components** to interact with the back-end API to display the features outlined in your wireframe.

## Evaluation Criteria

- **Functionality**: The application works as described.
- **Code Quality**: Clean, readable, and well-structured code.
- **Architecture**: Logical division of components, use of appropriate patterns.
- **Design**: Intuitive, responsive UI that provides a good user experience.
- **Wireframe**: Intuitive and easy to follow
- **Testing**: Writing tests for the code is out of scope for the task.

## Submission

- Submit your solution in a `yodelr-ts_yourlastname.zip` file
- Include a **README.md** with:
    - Setup and run instructions.
    - Overview of the API endpoints.
    - Brief description of your architectural decisions.

Make sure your application can be easily set up and run on a local machine.

## Additional Information

Feel free to use third-party libraries if you think they will help, but ensure that the core functionality is built by you.

Good luck!
