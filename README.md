
# Yodelr Social Media Demo

## Project Overview

Yodelr is inspired by the concept of a social messaging platform where users can post short messages and tag their content with topics. This demo implements the Yodelr application using NextJs for both the UI and server side API routes.

## Yodelr demo

A demo version of this application is hosted on vercel and can be accessed (here)[https://yodelr-lperry25.vercel.app/]

## Setup and run instructions

Since the API and UI are both running on the NextJs framework. Both are run simultaneously from the root folder.

### Install dependencies

Begin by installing the required dependencies from the root `npm install`

### Build the application

Now build the application by running the command `npm run build`

### Start the application

Once the application is built it can be started with the command `npm run start`

### Run in dev mode

To run the application in development mode you can skip the build step and just run `npm run dev`

** Note: Since all data is stored in memory, running in dev mode may result in lost data when the system rebuilds **

## Overview of the API endpoints
Since the API was written using NextJs routes, all API routes live in the pages/api/ directory. 

The following routes were created to handle the demo application:
    - POST `/auth/regsiter` - Registers a user given an username, password and confirmed password
    - POST `/auth/login` - Logs in a user given an username and password
    - POST `/posts` - Create a new post from the logged in user
    - GET `/posts` - Get all posts
    - GET `/posts/mine` - Get all posts for the logged in user
    - GET `/posts/{username}` - Get all posts from a specific user
    - GET `/posts/topic/{topic}` - Retrieve posts for a specific topic.
    - GET `/topics/trending` - Retrieve a list of trending topics with their number of posts for a given period.

## Architecture
NextJs was chosen for this application, since it's capabilities to write both frontend and server-side APIs make it an ideal choice when spinning up a demo quickly. The easy integration with Vercel allows you to host the demo both on Preview branches and the main branch.

The decision to use NextJs for the API in addition to the UI had a few downsides which I will detail further.

### Designs

Four wireframes were sketched detailing the screens that would be created for Yodelr. There where two mobile and two desktop screens sketched.

The (desktop screens)[https://yodelr-lperry25.vercel.app/img/wireframes/desktop-wireframes.png] show the User login screen and the user's feed.

The (mobile screens)[https://yodelr-lperry25.vercel.app/img/wireframes/mobile-wireframes.png] show the Trending topics screen and an example of a single topic feed.

### Front-End

- **Framework**: NextJs
- **Language**: TypeScript
- **API Communication**: Fetch API

The frontend code is mostly split between the `/pages` and `/components` directories with some helper functions found in the `/utils` and `/hooks` directories.

There was the architecutre decision to make this demo using the NextJs pages routes instead of the app router. This decision was made based off of what I am more familiar with based on time restrictions. It could be an interesting task to refactor the frontend to use the app router instead in order to take full advantage over server-side components. Given the small scope of this demo, I did not think it would be necessary for server-side components.

### Back-End
- **Environment**: Node.js
- **Framework**: NextJs
- **Data Storage**: In-memory storage (see the `db` directory with mocked data)

The decision to build the backend on NextJs was based both on the convenience of the NextJs API routes and an interest to use this feature. I have been working in NextJs for a couple years now, but have not found a place to use the API Routes yet.

This demo seemed like a great opportunity to test out the API Routes. This allowed me to quickly create API endpoints that live very close to the UI. For a demo purpose it is very nice that the API can be hosted alongside the UI which makes it very quick to setup.

I did find some draw backs to building the API in NextJs that I would not have found if I had used a framework like Express or Fastify: 

#### Backend Directories
NextJs API routes by creating an API route for every named file or directory inside the `/pages/api` directory. This means that all the helper functions I created needed to live in the route `utils` directory. I tried to improve this organization of files by creating a dedicated `utils/api` directory, however I would have preferred if the utils directory for the API routes could live closer to the API code. 

#### Seperation of API methods
Other frameworks also work better for sperating out GET and POST commands on the same endpoint. I would have preferred an archictecture where there were seperate functions for the GET and POST on the 'posts' endpoint. 

I think building a more complex backend in NextJs would start to become hard to read given the limiations I have found. However, for a quick demo like this application I think it worked really well to speed up development and deployment time.
