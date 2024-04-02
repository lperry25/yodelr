
# Yodelr Social Media Demo

## Project Overview

Yodelr is inspired by the concept of a social messaging platform where users can post short messages and tag their content with topics. This demo implements the Yodelr application using NextJs for both the UI and server side API routes.

## Yodelr demo

A demo version of this application is hosted on vercel and can be accessed [here](https://yodelr.vercel.app/)

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

** Note: Since all data is stored in memory, running in dev mode may result in unexpected lost data when the system rebuilds **

## Overview of the API endpoints
Since the API was written using NextJs routes, all API routes live in the `/pages/api/` directory. 

The following routes were created to handle the application features:  
    - POST `/auth/regsiter` - Registers a user given an username, password and confirmed password  
    - POST `/auth/login` - Logs in a user given an username and password  
    - POST `/posts` - Create a new post from the logged in user  
    - GET `/posts` - Get all posts  
    - GET `/posts/mine` - Get all posts for the logged in user  
    - GET `/posts/{username}` - Get all posts from a specific user  
    - GET `/posts/topic/{topic}` - Retrieve posts for a specific topic  
    - GET `/topics/trending` - Retrieve a list of trending topics with their number of posts for a given period. Accepts query parameters for to and from dates  

## Architecture
NextJs was chosen for this application, since it's capabilities to write both frontend and server-side APIs make it an ideal choice when spinning up a demo quickly. The easy integration with Vercel allows you to host the demo both on Preview branches and the main branch.

The decision to use NextJs for the API in addition to the UI had a few downsides which I will detail further.

### Designs

Four wireframes were sketched detailing the screens that would be created for Yodelr. There where two mobile and two desktop screens sketched.

The [desktop screens](https://yodelr.vercel.app/wireframes/desktop-wireframes.png) show the User login screen and the user's feed.

The [mobile screens](https://yodelr.vercel.app/wireframes/mobile-wireframes.png) show the Trending topics screen and an example of a single topic feed.

### Front-End

- **Framework**: NextJs
- **Language**: TypeScript
- **API Communication**: Fetch API

The frontend code is mostly split between the `/pages` and `/components` directories with some helper functions found in the `/utils` and `/hooks` directories.

There was an architecutre decision to make this demo using the [NextJs Pages Router](https://nextjs.org/docs/pages) instead of the [App Router](https://nextjs.org/docs/app). This decision was made based off of what I am more familiar with based on time restrictions. It could be an interesting task to refactor the frontend to use the App Router instead in order to take full advantage over server-side components. Given the small scope of this demo, I did not think it would be necessary for server-side components.

### Back-End
- **Environment**: Node.js
- **Framework**: NextJs
- **Data Storage**: In-memory storage (see the `db` directory with mocked data)

 The API routes are all in the `/pages/api` directory and their helper functions live in the `/utils/api` directory.

The decision to build the backend on NextJs was based both on the convenience of the NextJs API routes and an interest to use this feature. I have been working in NextJs for a couple years now, but have not found a place to use the API Routes yet. The NextJs API routes allowed me to quickly build API routes running on a NodeJs server.

This demo seemed like a great opportunity to test out the API Routes. This allowed me to quickly create API endpoints that live very close to the UI. For a demo purpose it is very nice that the API can be hosted alongside the UI which makes it very quick to setup.

I did find some draw backs to building the API in NextJs that I would not have found if I had used a framework like Express or Fastify: 

#### Backend Directories
NextJs API Routes work by creating endpoints based off of the files and directories inside the `/pages/api` directory. This means that all the helper functions I created need to live outside of the main api routes directory. I created a sub directory inside utils (`utils/api`) to try to seperate the api helper functions from the UI helper functions. I would have preferred if the utils directory for the API routes could live closer to the API code. The strict structure of NextJs is a small downside, as I would prefer to have more power over the structure of the directories.

#### Seperation of API methods
Other frameworks work better for sperating out REST methods on the same endpoint. For example, I would have preferred an archictecture where there were seperate functions for the GET and POST on the 'posts' endpoint. This was not possible in NextJs which I view as a downside to this technology.

Given the limiations I have found I think building a more complex backend in NextJs would start to become harder to read and follow. However, for a quick demo like this application I think it worked really well to speed up development and deployment time.
